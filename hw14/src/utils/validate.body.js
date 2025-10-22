import HttpError from "./HttpError.js";

const validateBody = (Schema, body) => {
  const result = Schema.safeParse(body);

  if (!result.success) {
    const firstError = JSON.parse(result.error.message)[0];
    const message = firstError.message;
    throw HttpError(400, message);
  }
};

export default validateBody;
