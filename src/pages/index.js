import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import picture from "../images/mauro.jpg";
import { useSpring, animated } from "react-spring";
import {
  HomeWrapper,
  HomeImage,
  InfoWrapper,
  HomeParagraph,
  SiteTitle,
} from "../components/styled/StyledHome";

const Test = () => {
  const pageTitle = "Mauro \nBono";

  const fade = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO title="Home" />
      <animated.div style={fade}>
        <HomeWrapper>
          <SiteTitle>{pageTitle}</SiteTitle>
          <HomeImage src={picture} alt="Mauro Bono Web Developer" />
          <InfoWrapper>
            <HomeParagraph>Hi, I'm Mauro.</HomeParagraph>
            <HomeParagraph>
              I am a Web Developer based in Rome, Italy.
            </HomeParagraph>
            <HomeParagraph>
              I'm specialized in HTML, CSS, JavaScript, ReactJS and Gatsby on
              the Front-End. Comfortable with NodeJS and MongoDB on the
              Back-End. I've been working with Wordpress and PHP since 2008.
              Check out my{" "}
              <a
                href="https://github.com/uptheirons78"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>{" "}
              profile.
            </HomeParagraph>
          </InfoWrapper>
        </HomeWrapper>
      </animated.div>
    </Layout>
  );
};

export default Test;
