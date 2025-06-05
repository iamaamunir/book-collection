import * as mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: { type: String },
  author: String,
  description: String,
  published_date: String,
  genre: String,
  pages: Number,
  created_at: Date,
  updated_at: Date,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "books",
  },
  availability: {
    type: String,
    enum: ["available", "borrowed", "reserved"],
    default: "available",
  },
});

const bookModel = mongoose.model("books", bookSchema);
export default bookModel;
