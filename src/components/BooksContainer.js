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
    <div>
      <div className="books-container mt-5">

        { bookStore.map((book) => (
          <div className="book border my-2 mx-5 pt-4" key={book.id}>
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
      </div>
      <BookForm />
    </div>
  );
};

export default BooksContainer;
