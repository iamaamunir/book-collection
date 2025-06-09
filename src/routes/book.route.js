import * as express from "express";
const bookRouter = express.Router();
import {
  createBookController,
  getBooksController,
  getSingleBookController,
  updateBookController,
  deleteBookController,
} from "../controllers/book.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

bookRouter.post("/book", authMiddleware, createBookController);
bookRouter.get("/books", authMiddleware, getBooksController);
bookRouter.get("/book/:id", authMiddleware, getSingleBookController);
bookRouter.patch("/book/:id", authMiddleware, updateBookController);
bookRouter.delete("/book/:id", authMiddleware, deleteBookController);

export default bookRouter;
