import React from "react";
import StyledFooter from "./styled/StyledFooter";
import Paragraph from "./styled/Paragraph";
import MdMail from "react-ionicons/lib/MdMail";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <div className="footer-brand">
        <Paragraph>
          <span>© {currentYear} </span>
          Mauro Bono
        </Paragraph>
      </div>
      <div className="footer-social">
        <a
          href="mailto:maurobono@maurobono.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdMail className="social-icon" />
        </a>
        <a
          href="https://github.com/uptheirons78"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoGithub className="social-icon" />
        </a>
        <a
          href="https://twitter.com/UpTheIrons1978"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoTwitter className="social-icon" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoLinkedin className="social-icon" />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
