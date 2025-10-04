export const triggerError = (req, res, next) => {
  if (req.path === "/error-test") {
    return next(new Error("Example error, test logging"));
  }
  next();
};
