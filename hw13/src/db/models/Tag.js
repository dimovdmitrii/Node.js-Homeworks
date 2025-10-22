import { Schema, model } from "mongoose";

const TagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    articles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
  },
  { versionKey: false, timestamps: true },
);

const Tag = model("Tag", TagSchema);
export default Tag;
