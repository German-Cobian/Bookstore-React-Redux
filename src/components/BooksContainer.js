import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { fetchBooks } from '../redux/reducers/books';
import 'react-circular-progressbar/dist/styles.css';

const BooksContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks(dispatch);
  }, []);

  const bookStore = useSelector((store) => store.bookReducer.books);

  return (
    <div className="books-container">

      { Object.entries(bookStore).map(([key, value]) => (
        <div className="book" key={value.id}>
          <Book
            category={value[0].category}
            title={value[0].title}
            chapter={1}
            completed={75}
            item_id={key}
          />
        </div>
      ))}

      <BookForm />
    </div>
  );
};

export default BooksContainer;
