import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Nvabar = () => {
  const data = useSelector((store) => store.infodata)
  const datalength = data.user
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link active " aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/AddToCart"
              >
                <div className="shopping position-relative">
                  <span>
                    {datalength.length > 0 ? datalength.length : null}
                  </span>
                  <FaShoppingCart />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nvabar
