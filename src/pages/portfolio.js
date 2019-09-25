import React from "react";
import { graphql } from "gatsby";
import SlideView from "../components/SlideView";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import PageTitle from "../components/styled/PageTitle";

const Portfolio = ({ data }) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <PageTitle>My Portfolio</PageTitle>
      <SlideView projects={data.allProjectsJson.edges} />
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
