import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../assets/user.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <div className="nav">

      <div className="d-flex flex-row justify-content-between">
        <div className="px-3 d-flex flex-row justify-content-left">
          <div className="nav-item">
            <h4 className="nav-link nav-title">
              Bookstore CMS
            </h4>
          </div>
          {
            links.map((link) => (
              <li className="nav-item " key={link.id}>
                <h4 className="nav-link navLinks-left mt-2">
                  <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
                </h4>
              </li>
            ))
          }
        </div>
        <div>
          <img src={user} alt="user" className="user" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
