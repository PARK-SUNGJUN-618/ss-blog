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
    title: Joi.string().required().messages({
      "string.empty": "Title can not be empty",
      "any.required": "Title is a required field",
    }),
    content: Joi.string().required(),
  });

  const { error } = schema.validate(body, {
    errors: { label: "key", wrap: { label: false, array: false } },
  });
  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(400).json({ error: errorMessage });
  }

  res.json({ ok: true });
};

export default handler;
