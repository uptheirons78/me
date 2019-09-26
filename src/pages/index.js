import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import Paragraph from "../components/styled/Paragraph";
import PageTitle from "../components/styled/PageTitle";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const IndexPage = ({ data }) => {
  const name = "Mauro \nBono";

  const fade = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO title="Home" />
      <animated.div style={fade}>
        <StyledHomeContainer>
          <StyledTitleContainer className="title-container">
            <HomeTitle>{name}</HomeTitle>
          </StyledTitleContainer>
          <StyledImageContainer className="image-container">
            <Img fluid={data.myImage.childImageSharp.fluid} alt="mauro bono" />
          </StyledImageContainer>
          <StyledInfoContainer className="info">
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
          </StyledInfoContainer>
        </StyledHomeContainer>
      </animated.div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    myImage: file(relativePath: { eq: "mauro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const StyledHomeContainer = styled.section`
  margin: 5vh auto;
  width: 280px;
  min-height: 70vh;
  max-height: 600px;
  /* border: 1px solid var(--primary-color); */
  position: relative;

  @media screen and (max-width: 501px) {
    width: 240px;
  }
`;

const StyledImageContainer = styled.div`
  width: 280px;
  height: auto;
  position: absolute;
  right: -20%;
  top: 5%;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.5),
    0px 3px 20px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 800px) {
    width: 260px;
    right: -15%;
  }
  @media screen and (max-width: 501px) {
    width: 240px;
    right: -10%;
  }
`;

const StyledTitleContainer = styled.div`
  white-space: pre-wrap;
  position: absolute;
  left: -35%;
  top: 5%;
  z-index: 99;

  @media screen and (max-width: 800px) {
    left: -20%;
  }
  @media screen and (max-width: 501px) {
    left: -20%;
  }
`;

const StyledInfoContainer = styled.div`
  width: 400px;
  height: auto;
  padding: 1.2rem 3rem;
  background-color: var(--primary-color);
  opacity: 0.9;
  position: absolute;
  left: -80%;
  bottom: 0;
  z-index: 99;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.5),
    0px 3px 20px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 800px) {
    width: 380px;
    left: -50%;
    bottom: 5%;
  }
  @media screen and (max-width: 678px) {
    width: 320px;
    left: -30%;
    bottom: 5%;
  }
  @media screen and (max-width: 501px) {
    width: 280px;
    left: -20%;
    bottom: 0;
  }

  a:link,
  a:visited {
    color: #f4f4f4;
    box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.7);
  }
`;

const HomeParagraph = styled(Paragraph)`
  color: #f4f4f4;
  text-align: justify;

  @media screen and (max-width: 501px) {
    font-size: 1.5rem;
  }
`;

const HomeTitle = styled(PageTitle)`
  font-size: 6rem;
  line-height: 0.9;
  text-transform: uppercase;

  @media screen and (max-width: 800px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 501px) {
    font-size: 4.5rem;
  }
`;
