import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/booksSlice';

import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleDelete = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="container">
      {(books ?? []).map((book) => (
        <Book key={book.item_id} book={book} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BookList;
