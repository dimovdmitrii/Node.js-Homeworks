import {
  getBookById,
  getBooks,
  updateBookById,
  deleteBookById,
  addBook,
} from "../services/books.service.js";
import HttpError from "../utils/httpError.js";

export const getBooksController = async (req, res) => {
  const result = await getBooks();
  res.json(result);
};

export const addBookController = async (req, res) => {
  const result = await addBook(req.body);
  res.status(201).json(result);
};

export const getBookByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getBookById(id);
  if (!result) throw HttpError(404, `Book with id= ${id} not found`);
  res.json(result);
};

export const updateBookByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await updateBookById(id, req.body);
  if (!result) throw HttpError(404, `Book with id= ${id} not found`);
  res.json(result);
};

export const deleteBookByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await deleteBookById(id);
  if (!result) throw HttpError(404, `Book with id= ${id} not found`);
  res.json(result);
};
