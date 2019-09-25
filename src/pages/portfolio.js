import React from "react";
import { graphql } from "gatsby";
import SlideView from "../components/SlideView";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/styled/PageTitle";
import { useSpring, animated, config } from "react-spring";

const Portfolio = ({ data }) => {
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
        <SlideView projects={data.allProjectsJson.edges} />
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
