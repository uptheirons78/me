import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <section>
        <ul>
          {edges.map(({ node }) => {
            const { title, date, path } = node.frontmatter;
            return (
              <li key={path}>
                <Link to={path}>
                  {title} ({date})
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="/tags">All tags</Link>
      </section>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
