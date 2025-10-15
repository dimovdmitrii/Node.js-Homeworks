import HttpError from "./HttpError.js";

const validateBody = (schema) => (req, res, next) => {
  const { error } = schema.safeParse(req.body);
  if (error) {
    const message = error.errors[0].message;
    throw HttpError(400, message);
  }
  next();
};

export { validateBody };
