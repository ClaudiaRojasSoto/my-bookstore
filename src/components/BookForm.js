import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Añade useSelector
import { addBook } from '../redux/books/booksSlice';
import { selectCategory } from '../redux/categories/categoriesSlice'; // Asegúrate de tener este selector en tu slice

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const category = useSelector(selectCategory); // Usa el selector para obtener la categoría

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      category, // Usa la categoría desde el estado de Redux
      item_id: Date.now().toString(),
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
