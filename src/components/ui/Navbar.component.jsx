import React, {useRef} from "react";

import './Navbar.css';

import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
const NavbarComponent = () => {

  const btnToggleRef = useRef();

  const toggleMenu = () => {
    if(window.innerWidth < 992){
      btnToggleRef.current.click();
    }
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div >
            <FaCoins className="navbar-logo-icon" />
            <span className="navbar-logo-text">پروژه ارز دیجیتال</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref={btnToggleRef}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={toggleMenu}>
                <Link className="nav-link active" to="/">
                  صفحه اصلی
                </Link>
              </li>

              <li className="nav-item" onClick={toggleMenu}>
                <Link className="nav-link active" to="/faq">
                  سوالات پر تکرار
                </Link>
              </li>

              <li className="nav-item" onClick={toggleMenu}>
                <Link className="nav-link active" to="/about-us">
                  درباره ما
                </Link>
              </li>

              <li className="nav-item" onClick={toggleMenu} >
                <Link className="nav-link active" to="/contact-us">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarComponent;
