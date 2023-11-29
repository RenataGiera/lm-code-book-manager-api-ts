import { Book } from "../models/book";

export const getBooks = async () => {
	return Book.findAll();
};

export const getBook = async (bookId: number) => {
	if (!bookId) {
		throw new Error(`Book with ID ${bookId} not found.`);
	}
	return Book.findOne({
		where: { bookId },
	});

};

export const saveBook = async (book: Book) => {
	const existingBook = await getBook(book.bookId);
	if (existingBook) {
		throw new Error(`A book with ID ${book.bookId} already exists.`);
	}
	return Book.create<Book>(book);
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId: number, book: Book) => {
	const existingBook = await getBook(bookId);
	if (!existingBook) {
		throw new Error(`Book with ID ${bookId} not found.`);
	}
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};
// User Story 5 - Delete Book By Id Solution
export const deleteBook = async (bookId: number) => {
	const existingBook = await getBook(bookId);
	if (!existingBook) {
		throw new Error(`Book with ID ${bookId} not found.`);
	}

	return Book.destroy ({
		where: { bookId },
	});
};
