export const checkAuthorization = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  res.type("Content-Type", "text/plain");

  if (!authorizationHeader) {
    res.status(401).send("Authorization header not found!");
  } else {
    res
      .status(200)
      .send("Athorization header received : " + authorizationHeader);
  }
};
