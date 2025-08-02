import { useNavigate } from "react-router-dom";

import "./header.css";

function Header() {
  const navigate = useNavigate();

  const handleStartBtnClick = () => {
    navigate("/auth");
  };

  return (
    <header className=" py-3 px-3 d-flex flex-row align-items-center justify-content-around">
      <input type="checkbox" id="burger-toggle" className="burger-toggle" />

      <div className="logo rounded-circle bg-secondary">
        <a className=" fs-3 nav-link " href="index.html">
          <img className="header-logo" src="../../../public/logo.png" />
        </a>
      </div>
      <label htmlFor="burger-toggle" className="burger-menu ms-auto">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className="d-flex flex-row nav ">
        <ul className="d-flex align-items-start align-items-md-center list-unstyled  pe-3 m-0">
          <li>
            <a className="nav-link " href="index.html">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link " href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link " href="contact.html">
              Contact
            </a>
          </li>
          <li className="position-relative">
            <input
              type="checkbox"
              id="dropdown-services"
              className="dropdown-toggle d-none"
            />
            <label
              htmlFor="dropdown-services"
              className="dropdown-label nav-link "
            >
              Features <span className="arrow">&#9662;</span>
            </label>
            <ul className="dropdown-menu bg-white">
              <li>
                <a href="business.html">Donate</a>
              </li>
              <li>
                <a href="privacy.html">Other Link</a>
              </li>
              <li>
                <a href="terms.html">Third Link</a>
              </li>
            </ul>
          </li>
          <li className="nav-link">
            <div className="d-flex gap-1">
              <a className="btn btn-primary" onClick={handleStartBtnClick}>
                Log in
              </a>
              <a className="btn btn-secondary " onClick={handleStartBtnClick}>
                Register
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
