import dbConnect from "@/lib/dbConnect";
import { NextApiHandler } from "next";
import { postValidationSchema, validateSchema } from "@/lib/validator";
import { readFile } from "@/lib/utils";
import Post from "@/models/Post";
import formidable from "formidable";
import cloudinary from "@/lib/cloudinary";

export const config = {
  api: { bodyParser: false },
};

const handler: NextApiHandler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET": {
      await dbConnect();
      res.json({ ok: true });
    }
    case "POST":
      return createNewPost(req, res);
  }
};

interface IncomingPost {
  title: string;
  content: string;
  slug: string;
  meta: string;
  tags: string;
}

const createNewPost: NextApiHandler = async (req, res) => {
  const { files, body } = await readFile<IncomingPost>(req);

  // maybe, formidable version issue.
  // const bodyOutput = Object.fromEntries(
  //   Object.entries(body).map(([key, value]) => [
  //     key,
  //     Array.isArray(value) ? value[0] : value,
  //   ])
  // );

  // tags will be in string form so converting to array
  let tags = [];
  if (body.tags) tags = JSON.parse(body.tags as string);

  // console.log("tags:", tags);
  const error = validateSchema(postValidationSchema, { ...body, tags });
  if (error) return res.status(400).json({ error });

  const { title, content, slug, meta } = body;

  await dbConnect();
  const alearyExist = await Post.findOne({ slug });
  if (alearyExist)
    return res.status(400).json({ error: "Slug need to be unique!" });

  //create new post
  const newPost = new Post({
    title,
    content,
    slug,
    meta,
    tags,
  });

  // uploading thumbnail if there is any
  const thumbnail = files.thumbnail as formidable.File[];
  if (thumbnail) {
    const { secure_url: url, public_id } = await cloudinary.uploader.upload(
      thumbnail[0].filepath,
      {
        folder: "ssblog",
      }
    );
    newPost.thumbnail = { url, public_id };
  }

  await newPost.save();
  res.json({ post: newPost });
};

export default handler;
