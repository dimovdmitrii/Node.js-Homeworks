import { Schema, model } from "mongoose";

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
  },
  { versionKey: false, timestamps: true },
);

const Article = model("Article", ArticleSchema);
export default Article;
