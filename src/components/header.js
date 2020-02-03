import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import StyledHeader from "./styled/StyledHeader";
import Logo from "../images/logo.png";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: 200px;
  height: auto;
  padding-top: 9px;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--primary-color);

  @media screen and (max-width: 600px) {
    width: 170px;
    padding-top: 12px;
  }
`;

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

  const hamburgerRef = useRef(null);

  const handleKeyDown = ev => {
    if (ev.keyCode === 13) {
      hamburgerRef.current.focus();
      setHamburgerState(!hamburgerState);
    }
  };

  return (
    <StyledHeader>
      <div className="container">
        <nav>
          <Link className="navbar-brand" to="/">
            <StyledLogo src={Logo} alt="Mauro Bono" />
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
              ref={hamburgerRef}
              aria-label="Open the menu"
              role="button"
              className={hamburgerStyle}
              onClick={() => setHamburgerState(!hamburgerState)}
              onKeyDown={handleKeyDown}
              tabIndex={0}
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
