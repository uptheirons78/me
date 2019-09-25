import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Paragraph from "../components/styled/Paragraph";
import PageTitle from "../components/styled/PageTitle";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

const About = () => {
  const slideIn = useSpring({
    config: config.slow,
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
  });

  const fade = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO title="About" />
      <animated.div style={slideIn}>
        <PageTitle>About me</PageTitle>
      </animated.div>
      <animated.div style={fade}>
        <Paragraph>
          It all started in the late 2008 when a good friend of mine asked me if
          I knew someone to help him to build a website. His budget was so low
          he couldn't find a good developer to help him and being the good guy I
          am{" "}
          <span role="img" aria-label="emoji">
            😜
          </span>{" "}
          I decided to do it for free. So I discovered something called
          Wordpress and really felt in love with this world.
        </Paragraph>
        <Paragraph>
          On my spare time I started learning HTML and the basic of CSS. Then I
          began to play just a little with PHP, Custom Post Types, Advanced
          Custom Fields and some JQuery to create my own themes or to change and
          modify others. I never thought I could change my career and built many
          websites for my friends and for fun until I realized I like coding and
          what a dream it can be to do it on a daily basis.
        </Paragraph>
        <Paragraph>
          So during 2017 I started learning Vanilla Javascript and on September
          of the same here I've got my Front-End Certification on FreeCodeCamp.
          Then I added Node, Express, MongoDB and React to my skills so I could
          provide Full-Stack Javescript services to clients.
        </Paragraph>
        <Paragraph>
          The tools I use daily are HTML, CSS (Sass/PostCss), Wordpress,
          JavaScript, React and Git. I have experience also with PHP, Node.js,
          Express, MongoDB and MySQL. Working hard day after day I really want
          to strengthen my programming fundamentals, improve my JavaScript and
          build more personal projects to grab more familiarity both on the
          Front-End and the Back-End. Currently, I am really in love with the
          JAM-Stack ecosystem and working a lot with GatsbyJS, Markdown,
          GraphQL, and serverless functions. Actually this website is built with
          Gatsby, Markdown and many fantastic tools like React-Slick and
          React-Spring.
        </Paragraph>
        <Paragraph>
          When I am not in front of a computer, I am probably running, listening
          to some good Rock or Heavy Metal music, reading a book, hanging out
          with my wife Valentina and my beautiful daughter Chloe{" "}
          <span role="img" aria-label="emoji">
            💖
          </span>{" "}
          or with my dog Darth{" "}
          <span role="img" aria-label="emoji">
            🐶
          </span>
          .
        </Paragraph>
      </animated.div>
      <animated.div style={fade}>
        <StyledSection>
          <StyledH2>Front-End</StyledH2>
          <Paragraph>
            HTML, CSS, Sass, Javascript, JQuery, React, Styled Components,
            Gatsby, Bootstrap, MaterialUI, Git, Gulp
          </Paragraph>
          <StyledH2>Back-End</StyledH2>
          <Paragraph>Node, Express, MongoDB, PHP and MySQL</Paragraph>
          <StyledH2>Content Management Systems (CMS)</StyledH2>
          <Paragraph>Wordpress, Woocommerce, Contentful</Paragraph>
          <StyledH2>Operating Systems (OS)</StyledH2>
          <Paragraph>
            Linux Ubuntu, Linux Mint, Windows (7, Vista, 10)
          </Paragraph>
        </StyledSection>
      </animated.div>
    </Layout>
  );
};
export default About;
const StyledSection = styled.section`
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(3, 175, 194, 0.3);
`;
const StyledH2 = styled.h2`
  color: var(--primary-color);
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 1px;
`;
