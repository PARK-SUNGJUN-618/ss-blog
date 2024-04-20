import dbConnect from "@/lib/dbConnect";
import { NextApiHandler } from "next";
import Joi from "joi";

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

const createNewPost: NextApiHandler = (req, res) => {
  const { body } = req;

  const schema = Joi.object().keys({
    title: Joi.string().required(),
  });

  const { error } = schema.validate(body);
  console.log(error);

  res.json({ ok: true });
};

export default handler;
