import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Paragraph from "../components/styled/Paragraph";
import PageTitle from "../components/styled/PageTitle";
import { useSpring, animated, config } from "react-spring";
import {
  StyledFormWrapper,
  StyledForm,
  StyledH2,
} from "../components/styled/StyledForm";

const Contact = () => {
  const hint = "Let's Build \nSomething \nGreat !";

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
      <SEO title="Contact" />
      <animated.div style={slideIn}>
        <PageTitle>Contact Me</PageTitle>
      </animated.div>
      <StyledFormWrapper>
        <animated.div style={fade}>
          <StyledForm name="Contact Form" method="POST" data-netlify="true">
            <label for="name">Name</label>
            <input type="text" id="name" />
            <label for="email">Email</label>
            <input type="text" id="email" />
            <label for="message">Message</label>
            <textarea id="message" cols="30" rows="8"></textarea>
            <input type="button" value="Send" id="sendBtn" />
            <div data-netlify-recaptcha="true"></div>
          </StyledForm>
          <StyledH2>{hint}</StyledH2>
          <Paragraph>
            If you like my works and have some cool project to build, just fill
            the form or contact me through my social media listed below.
          </Paragraph>
        </animated.div>
      </StyledFormWrapper>
    </Layout>
  );
};

export default Contact;
