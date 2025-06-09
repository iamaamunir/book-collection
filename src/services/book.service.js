import * as mongoose from "mongoose";
import bookModel from "../models/book.js";
import userModel from "../models/user.js";
import { AppError } from "../utils/appError.js";

export const createBook = async function (payload, req) {
  try {
    const user = await userModel.findOne({ email: req.user.email });

    if (!user) {
      throw new AppError("User not found", 404);
    }
    const bookData = {
      title: payload.title,
      author: payload.author,
      description: payload.description,
      published_date: payload.published_date,
      genre: payload.genre,
      pages: payload.pages,
      user_id: req.user.id,
      created_at: new Date(),
      availability: payload.availability,
    };
    const newBook = await bookModel.create(bookData);

    return newBook;
  } catch (error) {
    console.log(error);

    if (!(error instanceof AppError)) {
      throw new AppError("Internal server error", 500);
    }

    throw error;
  }
};

export const getBooks = async function (req) {
  try {
    const user = await userModel.findOne({ email: req.user.email });

    if (!user) {
      throw new AppError("User not found", 404);
    }
    const books = await bookModel.find();
    return books;
  } catch (error) {
    console.log(error);

    if (!(error instanceof AppError)) {
      console.log(error)
      throw new AppError("Internal server error", 500);
    }

    throw error;
  }
};

export const getSingleBook = async function (bookId, req) {
  try {
    const user = await userModel.findOne({ email: req.user.email });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    const book = await bookModel.findOne({ _id: bookId });
    if (!book) {
      throw new AppError("Book not found", 404);
    }
    return book;
  } catch (error) {
    console.log(error);

    if (!(error instanceof AppError)) {
      throw new AppError("Internal server error", 500);
    }

    throw error;
  }
};

export const updateBook = async function (bookId, payload, req) {
  try {
    const user = await userModel.findOne({ email: req.user.email });

    if (!user) {
      throw new AppError("User not found", 404);
    }
    const book = await bookModel.findByIdAndUpdate(bookId, payload, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      throw new AppError("Book not found", 404);
    }
    book.updated_at = new Date();
    book.save();
    return book;
  } catch (error) {
    console.log(error);

    if (!(error instanceof AppError)) {
      throw new AppError("Internal server error", 500);
    }

    throw error;
  }
};

export const deleteBook = async function (bookId, req) {
  try {
    const user = await userModel.findOne({ email: req.user.email });

    if (!user) {
      throw new AppError("User not found", 404);
    }
    const book = await bookModel.findByIdAndDelete(bookId);
    if (!book) {
      throw new AppError("Book not found", 404);
    }
    return;
  } catch (error) {
    console.log(error);

    if (!(error instanceof AppError)) {
      throw new AppError("Internal server error", 500);
    }

    throw error;
  }
};
