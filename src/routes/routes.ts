import express from "express";
import * as booksController from "../controllers/books_controller";

export const router = express.Router();
router.get("/books", booksController.getBooks);
router.get("/books/:bookId", booksController.getBook);
router.post("/books", booksController.saveBook);

// User Story 4 - Update Book By Id Solution
router.put("/books/:bookId", booksController.updateBook);
// User Story 5 - Delete Book By Id Solution
router.delete("/books/:bookId", booksController.deleteBook);
