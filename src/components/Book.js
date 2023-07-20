import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div className="lesson-panel">
      <div className="book-content">
        <div className="book-content-details">
          <p className="type">Literature</p>
          <h3>{book.title}</h3>
          <p className="author">
            {book.author}
          </p>
        </div>
        <div className="buttons">
          <button className="comment" type="button">
            Comments
          </button>
          <button className="remove" type="button" onClick={handleDelete}>
            Remove
          </button>
          <button className="edit" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="advance">
        <div className="circle">
          <CircularProgressbar />
        </div>
        <div className="advance-percent-completed">
          <p className="advance-percent">0%</p>
          <p className="advance-completed">Completed</p>
        </div>
      </div>
      <div className="chapter-container">
        <div className="chapter-section">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 1</p>
        </div>
        <div>
          <button className="button-update" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>

    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
