import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './routes/Navigation';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
  const [books, setBooks] = React.useState([]);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleDeleteBook = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<BookList books={books} onDelete={handleDeleteBook} />} />
        </Routes>
        <BookForm onAdd={handleAddBook} />
      </div>
    </Router>
  );
};

export default App;
