const errorHandler = (error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  req.status(status).json({
    message,
  });
};

export default errorHandler;
