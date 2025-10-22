import HttpError from "./HttpError.js";

const validateBody = (schema, body) => {
  const result = schema.safeParse(body);

  if (!result.success) {
    const firstError = JSON.parse(result.error.message)[0];
    const message = firstError.message;
    throw HttpError(400, message);
  }
  return true;
};

export default validateBody;
