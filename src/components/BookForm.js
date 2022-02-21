import React from 'react';

const BookForm = () => (
  <div className="form-container">
    <h4>
      ADD NEW BOOK
    </h4>
    <form className="row gy-2 gx-3 align-items-center">
      <div className="col-auto">
        <div className="input-group book-title">
          <input type="text" className="form-control" id="title" placeholder="Book title" />
        </div>
      </div>
      <div className="col-auto">
        <div className="input-group book-author">
          <input type="text" className="form-control" id="author" placeholder="Author" />
        </div>
      </div>

      <div className="col-auto">
        <select className="form-control" id="sel1" placeholder="Category">
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
);

export default BookForm;