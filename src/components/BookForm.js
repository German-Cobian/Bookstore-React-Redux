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
      id: uuidv4(),
    };
    dispatch(addBook(newBook));
    setCategory('');
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <div className="form-container mt-5">
        <div className="border-top">
          <h4 className="mt-4 add-form-title css-package">
            ADD NEW BOOK
          </h4>
          <form className="row" onSubmit={submitBookToStore}>
            <div className="col-4">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
            </div>
            <div className="col-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
              </div>
            </div>

            <div className="col-2">
              <input type="text" className="form-control" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>

            <div className="col-4">
              <button type="submit" className="btn col-6 btn-add-book css-package">ADD BOOK</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookForm;
