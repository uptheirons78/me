import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import StyledHeader from "./styled/StyledHeader";

const Header = () => {
  const [hamburgerState, setHamburgerState] = useState(false);
  const hamburgerStyle = hamburgerState ? "hamburger active" : "hamburger";
  const navListStyle = hamburgerState ? "nav-list active" : "nav-list";

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <StyledHeader>
      <div className="container">
        <nav>
          <Link className="navbar-brand" to="/">
            {"{ MB78 }"}
          </Link>
          <ul className={navListStyle}>
            {pages.map(page => (
              <li className="nav-item" key={page.name}>
                <Link className="nav-link" to={page.path}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hamburger-container">
            <div
              className={hamburgerStyle}
              onClick={() => setHamburgerState(!hamburgerState)}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
