import React from "react";
import Slider from "react-slick";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/styled/PageTitle";
import ExternalLink from "../components/styled/ExternalLink";
import { useSpring, animated, config } from "react-spring";
import {
  SliderContainer,
  SliderWrapper,
  StyledInfo,
  StyledThumbnail,
} from "../components/styled/StyledSlide";

/**Slider Arrows */
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      aria-label="next button"
      role="button" // eslint-disable-line no-use-before-define
      className={className}
      style={{ ...style }}
      onClick={onClick}
      onKeyDown={e => {
        console.log(e.keyCode);
      }}
      tabIndex={0}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      aria-label="previous button"
      role="button" // eslint-disable-line no-use-before-define
      className={className}
      style={{ ...style }}
      onClick={onClick}
      onKeyDown={e => {
        console.log(e.keyCode);
      }}
      tabIndex={0}
    />
  );
}

const Portfolio = ({ data }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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
      <SEO title="Portfolio" />
      <animated.div style={slideIn}>
        <PageTitle>My Portfolio</PageTitle>
      </animated.div>
      <animated.div style={fade}>
        <SliderWrapper>
          <Slider {...settings}>
            {data.allProjectsJson.edges.map(project => {
              const {
                title,
                description,
                displayDate,
                github,
                website,
                id,
              } = project.node;

              const thumbnail =
                project.node.thumbnailImage.childImageSharp.fluid.src;

              return (
                <SliderContainer key={id}>
                  <StyledThumbnail>
                    <img src={thumbnail} alt={title} />
                    <figcaption>{displayDate}</figcaption>
                  </StyledThumbnail>
                  <StyledInfo>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <ul>
                      <li>
                        <ExternalLink href={website}>Website</ExternalLink>
                      </li>
                      <li>
                        <ExternalLink href={github}>Github</ExternalLink>
                      </li>
                    </ul>
                  </StyledInfo>
                </SliderContainer>
              );
            })}
          </Slider>
        </SliderWrapper>
      </animated.div>
    </Layout>
  );
};

export default Portfolio;

//graphql query to collect Projects Data from ../data/projects.json
export const projectsQuery = graphql`
  query {
    allProjectsJson(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          displayDate
          description
          website
          github
          thumbnailImage {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
