import Book from "../db/models/books.js";

export const addBook = (payload) => Book.create(payload);

export const getBooks = () => Book.findAll();

export const getBookById = (id) => Book.findByPk(id);

export const updateBookById = async (id, payload) => {
  const book = await getBookById(id);
  if (!book) return null;
  return book.update(payload);
};

export const deleteBookById = async (id) => {
  const book = await getBookById(id);
  if (!book) return null;
  await book.destroy();
  return book;
};
