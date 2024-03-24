import { NextApiHandler } from "next";
import formidable from "formidable";
import cloudinary from "@/lib/cloudinary";

export const config = {
  api: { bodyParser: false },
};

const handler: NextApiHandler = (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      return uploadNewImage(req, res);
    case "GET":
      return readAllImages(req, res);
    default:
      return res.status(404).send("Not found!");
  }
};

const uploadNewImage: NextApiHandler = (req, res) => {
  const form = formidable();
  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: err.message });

    const imageFiles = files.image as formidable.File[];
    imageFiles.map((imagefile) => {
      cloudinary.uploader.upload(imagefile.filepath);
    });
  });
};

const readAllImages: NextApiHandler = (req, res) => {};

export default handler;
