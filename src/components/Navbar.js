import React from 'react'
import PropTypes from 'prop-types'

// PROPS 1 : ADD PROPS
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              {props.aboutText}
              </a>
            </li>
          </ul>
          <div className="col-md-6 text-white">          
            <h4>TEXT ANALYZER</h4>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* success=Green, primary=Blue, danger=Red */}
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}


// PROPS 2 : HANDLING PROPS
Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title : "TUT",
  aboutText : "ABT"
}