import { Schema, model } from "mongoose";

const PublisherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const Publisher = model("Publisher", PublisherSchema);
export default Publisher;
