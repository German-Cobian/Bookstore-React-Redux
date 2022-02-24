import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/reducers/books';

const Book = (props) => {
  const {
    category, title, author, chapter, completed, id,
  } = props;

  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBook(id));
  };

  return (

    <div className="row">
      <div className="Book-info col">
        <ul>
          <li className="category css-package">
            {category}
          </li>
          <li className="title css-package">
            {title}
          </li>
          <li className="author css-package">
            {author}
          </li>
          <li>
            <button type="button" className="comments css-package" value={id}>Comments</button>
            {' | '}
            <button type="button" className="remove css-package" onClick={removeBookFromStore}>Remove</button>
            {' | '}
            <button type="button" className="edit css-package" value={id}>Edit</button>
          </li>
        </ul>
      </div>
      <div className="progress-book col">
        <ul className="row">
          <li className="col">
            <CircularProgressbar value={completed} styles={{ root: { width: '100px', height: '100px' } }} />
          </li>
          <li className="col-5 line-2">
            <h2 className="">
              {completed}
              %
            </h2>
            <p className="completed">Completed</p>
          </li>
        </ul>
      </div>

      <div className="col chapter-info">
        <ul>
          <li className="current-chapter css-package">
            CURRENT CHAPTER
          </li>
          <li className="chapter css-package">
            Chapter
            {chapter}
          </li>
          <li className="py-2">
            <button type="button" className="btn update-button css-package" value={id}>UPDATE PROGRESS</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  chapter: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};

export default Book;
