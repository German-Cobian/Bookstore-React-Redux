import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { loadBooks } from '../redux/reducers/books';
import 'react-circular-progressbar/dist/styles.css';

const BooksContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  const bookStore = useSelector((state) => state.bookReducer);

  return (
    <div className="books-container">

      { bookStore.map((book) => (
        <div className="book" key={book.id}>
          <Book
            category={book.category}
            title={book.title}
            author={book.author}
            chapter={book.chapter}
            completed={book.completed}
            id={book.id}
          />
        </div>
      ))}

      <BookForm />
    </div>
  );
};

export default BooksContainer;
