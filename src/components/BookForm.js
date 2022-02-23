import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/reducers/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      category,
      title,
      author,
      chapter: 1,
      completed: 75,
      item_id: uuidv4(),
    };
    dispatch(addBook(newBook));
    setCategory('');
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <div className="form-container">
        <h4>
          ADD NEW BOOK
        </h4>
        <form className="row gy-2 gx-3 align-items-center" onSubmit={submitBookToStore}>
          <div className="col-auto">
            <div className="input-group book-title">
              <input type="text" className="form-control" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="col-auto">
            <div className="input-group book-author">
              <input type="text" className="form-control" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
          </div>

          <div className="col-auto">
            <select className="form-control" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option>Non-Fiction</option>
              <option>Drama</option>
              <option>Fantasy</option>
              <option>Mistery</option>
              <option>Customs</option>
            </select>
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary">ADD BOOK</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookForm;
