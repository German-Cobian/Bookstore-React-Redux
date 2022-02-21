import React from 'react';
import Book from './Book';
import BookForm from './BookForm';
import 'react-circular-progressbar/dist/styles.css';

const BooksContainer = () => {
  const books = [
    {
      id: 1,
      category: 'Non-Fiction',
      title: 'Thus Spake Zarathustra',
      author: 'Fredrick Nietszche',
      chapter: 3,
      completed: 40,
    },
    {
      id: 2,
      category: 'Customs',
      title: 'The Possessed',
      author: 'Dostoyevsky',
      chapter: 8,
      completed: 70,
    },
    {
      id: 3,
      category: 'Fantasy',
      title: 'Lord of the Rings',
      author: 'Tolkien',
      chapter: 9,
      completed: 60,
    },

  ];
  return (
    <div className="books-container">

      { books.map((book) => (
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
