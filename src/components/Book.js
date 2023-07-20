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
    <div className="lesson-panel flex">
      <div className="book-content flex">
        <div className="book-content-details">
          <p className="type fontsty-normal montserrat">Literature</p>
          <h3 className="title fontsty-normal montserrat">{book.title}</h3>
          <p className="author fontsty-normal roboto">
            {book.author}
          </p>
        </div>
        <div className="buttons">
          <button className="comment fontsty-normal roboto" type="button">
            Comments
          </button>
          <button className="remove fontsty-normal roboto" type="button" onClick={handleDelete}>
            Remove
          </button>
          <button className="edit fontsty-normal roboto" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="advance flex">
        <div className="circle">
          <CircularProgressbar />
        </div>
        <div className="advance-percent-completed">
          <p className="advance-percent fontsty-normal montserrat">0%</p>
          <p className="advance-completed fontsty-normal montserrat">Completed</p>
        </div>
      </div>
      <div className="chapter-container flex center">
        <div className="chapter-section">
          <p className="current-chapter fontsty-normal roboto">CURRENT CHAPTER</p>
          <p className="chapter fontsty-normal roboto">Chapter 1</p>
        </div>
        <div>
          <button className="button-update roboto" type="button">
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
