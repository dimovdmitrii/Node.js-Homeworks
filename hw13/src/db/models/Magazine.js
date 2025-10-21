import { Schema, model } from "mongoose";

const magazineSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    issueNumber: {
      type: Number,
      required: true,
    },
    publisher: {
      type: Schema.Types.ObjectId,
      ref: "Publisher",
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const Magazine = model("Magazine", magazineSchema);
export default Magazine;
