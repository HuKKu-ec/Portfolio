import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link style={{ all: 'unset', cursor: 'pointer' }} to="/">
        <h1
          className="navbar-brand"
          style={{
            display: 'inline',
            color: '#000',
            fontFamily: 'Kodchasan',
            fontSize: '1.5rem',
          }}
        >
          <b>HUKBATH EC</b>
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto" style={{ fontFamily: 'Kodchasan' }}>
          <li className="nav-item mr-3">
            <b>
              <Link
                className="nav-link"
                to="/"
                style={{ all: 'unset', cursor: 'pointer' }}
              >
                Home
              </Link>
            </b>
          </li>
          <li className="nav-item mr-3">
            <b>
              <Link
                to="/about"
                className="nav-link"
                style={{ all: 'unset', cursor: 'pointer' }}
              >
                About Me
              </Link>
            </b>
          </li>
          <li className="nav-item mr-3 ">
            <b>
              <Link
                to="/skills"
                style={{ all: 'unset', cursor: 'pointer' }}
                className="nav-link"
              >
                Skills
              </Link>
            </b>
          </li>
          <li className="nav-item mr-3">
            <b>
              <Link
                className="nav-link"
                to="/achievements"
                style={{ all: 'unset', cursor: 'pointer' }}
              >
                Achievements
              </Link>
            </b>
          </li>
          <li className="nav-item mr-3">
            <b>
              <Link
                className="nav-link"
                to="/experience"
                style={{ all: 'unset', cursor: 'pointer' }}
              >
                Experience
              </Link>
            </b>
          </li>

          <li className="nav-item mr-3 ">
            <b>
              <Link
                to="/blogs"
                style={{ all: 'unset', cursor: 'pointer' }}
                className="nav-link"
              >
                Blogs
              </Link>
            </b>
          </li>
          <li className="nav-item mr-3 ">
            <b>
              <Link
                to="/projects"
                style={{ all: 'unset', cursor: 'pointer' }}
                className="nav-link"
              >
                Projects
              </Link>
            </b>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Link style={{ all: 'unset' }} to="/contact">
            <button type="submit">Contact</button>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Header;
