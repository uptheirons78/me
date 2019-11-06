import React from "react";
import Layout from "../components/layout";
import Paragraph from "../components/styled/Paragraph";
import StyledInternalLink from "../components/styled/StyledInternalLink";
import SEO from "../components/seo";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const NotFoundPage = () => {
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
      <SEO title="404: Page Not found" />
      <StyledSection>
        <StyledLeft className="left">
          <animated.div style={slideIn}>
            <StyledH1>404</StyledH1>
          </animated.div>
        </StyledLeft>
        <StyledRight className="right">
          <animated.div style={fade}>
            <StyledInfo>
              <StyledH4>This is awkward.</StyledH4>
              <Paragraph>
                Oops! Something went wrong. It is possible the internet is
                broken, the world is ending or Slartibartfast in Magrathea made
                a mistake and erased this page while working again on Norway
                fjords.
              </Paragraph>
              <Paragraph>
                Either way, I'm going to investigate the cause. Meanwhile you
                can go back to the{" "}
                <StyledInternalLink to="/">home</StyledInternalLink> page.
              </Paragraph>
              <Paragraph>
                Or take a look at my awesome{" "}
                <StyledInternalLink to="/blog">blog</StyledInternalLink>.
              </Paragraph>
            </StyledInfo>
          </animated.div>
        </StyledRight>
      </StyledSection>
    </Layout>
  );
};

export default NotFoundPage;

const StyledSection = styled.section`
  min-height: 75vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 4rem;

  @media screen and (max-width: 751px) {
    grid-template-columns: 1fr;
    min-height: 60vh;
    margin-top: 5rem;
  }
`;

const StyledLeft = styled.div`
  margin-bottom: 3rem;
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInfo = styled.div`
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.2),
    0px 3px 20px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 3rem;
  text-align: justify;
`;

const StyledH1 = styled.h1`
  color: var(--primary-color);
  font-size: 16rem;
  transform: skewY(-7deg);
  text-shadow: 5px 5px rgba(0, 0, 0, 0.1);
`;
const StyledH4 = styled.h4`
  color: var(--primary-color);
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  text-transform: uppercase;
`;
