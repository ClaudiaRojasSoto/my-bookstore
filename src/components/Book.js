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
        <h3>{book.title}</h3>
        <p className="author">
          {book.author}
        </p>
        <div className="buttons">
          <button className="button" type="button">
            Comments
          </button>
          <button className="button" type="button" onClick={handleDelete}>
            Remove
          </button>
          <button className="button" type="button">
            Edit
          </button>
        </div>
      </div>
      <div>
        <div className="circle">
          <CircularProgressbar />
        </div>
        <div>
          <p>0%</p>
          <p>Completed</p>
        </div>
      </div>
      <div>
        <div>
          <p>CURRENT CHAPTER</p>
          <p>Chapter 1</p>
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
