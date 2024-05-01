import { readFile } from "@/lib/utils";
import { postValidationSchema, validateSchema } from "@/lib/validator";
import Post from "@/models/Post";
import { NextApiHandler } from "next";

export const config = {
  api: { bodyParser: false },
};

const handler: NextApiHandler = (req, res) => {
  const { method } = req;
  switch (method) {
    case "PATCH":
      return updatePost(req, res);
    default:
      res.status(404).send("Not Found!");
  }
};

const updatePost: NextApiHandler = async (req, res) => {
  const postId = req.query.postId as string;
  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ error: "Post not found!" });

  const { files, body } = await readFile(req);

  // maybe, formidable version issue.
  const bodyOutput = Object.fromEntries(
    Object.entries(body).map(([key, value]) => [
      key,
      Array.isArray(value) ? value[0] : value,
    ])
  );

  // tags will be in string form so converting to array
  let tags = [];
  if (bodyOutput.tags) tags = JSON.parse(bodyOutput.tags as string);

  const error = validateSchema(postValidationSchema, { ...bodyOutput, tags });
  if (error) return res.status(404).json({ error });

  // how to write better code

  const { title, content, meta, slug } = bodyOutput;
  post.title = title;
  post.content = content;
  post.meta = meta;
  post.tags = tags;
  post.slug = slug;

  await post.save();
  res.json({ post });
};

export default handler;
