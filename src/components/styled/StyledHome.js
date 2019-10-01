import styled from "styled-components";
import Paragraph from "./Paragraph";

const HomeWrapper = styled.section`
  max-width: 960px;
  width: 100%;
  min-height: 80vh;
  position: relative;

  @media screen and (max-width: 600px) {
    min-height: 70vh;
  }

  @media screen and (min-height: 900px) {
    min-height: 65vh;
  }
  @media screen and (min-height: 1200px) {
    min-height: 50vh;
    margin-top: 10vh;
  }
`;

const SiteTitle = styled.h1`
  white-space: pre-wrap;
  color: var(--primary-color);
  font-size: 6rem;
  line-height: 0.9;
  text-transform: uppercase;
  position: absolute;
  top: 10%;
  left: 25%;
  z-index: 200;

  @media screen and (max-width: 768px) {
    left: 18%;
  }
  @media screen and (max-width: 480px) {
    top: 5%;
    left: 10%;
  }
`;

const HomeImage = styled.img`
  object-fit: cover;
  max-width: 25rem;
  width: 100%;
  height: auto;
  position: absolute;
  top: 10%;
  left: 60%;
  transform: translateX(-50%);
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.5),
    0px 3px 20px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 480px) {
    max-width: 30rem;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const InfoWrapper = styled.div`
  background: var(--primary-color);
  opacity: 0.9;
  max-width: 40rem;
  width: 100%;
  padding: 1rem 3rem;
  position: absolute;
  bottom: 3%;
  left: 40%;
  transform: translateX(-50%);
  z-index: 199;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.5),
    0px 3px 20px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 480px) {
    left: 50%;
    bottom: 0;
  }

  a:link,
  a:visited {
    color: #f4f4f4;
    box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.7);
  }
`;

const HomeParagraph = styled(Paragraph)`
  color: #fff;
  text-align: justify;
`;

export { HomeWrapper, HomeImage, InfoWrapper, HomeParagraph, SiteTitle };
