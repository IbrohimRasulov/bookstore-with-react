/* eslint-disable react/jsx-key */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromAPI } from '../redux/books/books';

const BookItem = (props) => {
  const {
    id,
    author,
    title,
    category,
  } = props;
  const dispatch = useDispatch();

  return (
    <div className="book-item" key={id}>
      <div className="content">
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="book-buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(removeBookFromAPI(id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div className="spinner">
          <div className="spin" />
          <div className="percent">
            <p>75%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="chapter">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
