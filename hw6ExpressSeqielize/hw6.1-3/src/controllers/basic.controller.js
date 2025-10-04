export const getBasicController = async (req, res) => {
  res.json({ message: "Hello world!" });
};

export const addBasicController = async (req, res) => {
  const bodyData = req.body;
  if (!bodyData ) {
    return res.status(400).json({ error: "Data is required" });
  }
  res.json({ message: "Data received successfully!", receivedData: bodyData });
};
