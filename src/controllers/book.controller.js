import {
  createBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} from "../services/book.service.js";

export const createBookController = async function (req, res, next) {
  try {
    const newBook = await createBook(req.body, req);

    res.json({
      data: newBook,
      statusCode: 201,
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};

export const getBooksController = async function (req, res, next) {
  try {
    const books = await getBooks(req);
    res.json({
      data: books,
      statusCode: 201,
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleBookController = async function (req, res, next) {
  try {
    const book = await getSingleBook(req.params.id, req);
    res.json({
      data: book,
      statusCode: 200,
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};

export const updateBookController = async function (req, res, next) {
  try {
    const book = await updateBook(req.params.id, req.body, req);
    res.json({
      data: book,
      statusCode: 204,
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBookController = async function (req, res, next) {
  try {
    const bookId = req.params.id;
    const book = await deleteBook(bookId, req);
    res.json({
      data: book,
      statusCode: 204,
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};
