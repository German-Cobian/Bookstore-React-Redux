import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import 'react-circular-progressbar/dist/styles.css';

const BooksContainer = () => {
  const bookStore = useSelector((store) => store.book);

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
