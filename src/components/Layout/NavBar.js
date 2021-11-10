import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <header className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/welcome">
              <h2>
                Žolių<em>Fėja</em>
              </h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <NavLink className={(navData)=>navData.isActive? "nav-link active" : "nav-link"} to="/welcome">
                  Į pradžią
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={(navData)=>navData.isActive? "nav-link active" : "nav-link"} to="/products">
                    Produktai
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={(navData)=>navData.isActive? "nav-link active" : "nav-link"} to="/about">
                    Apie Mus
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={(navData)=>navData.isActive? "nav-link active" : "nav-link"} to="/contacts">
                    Kontaktai
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavBar;
