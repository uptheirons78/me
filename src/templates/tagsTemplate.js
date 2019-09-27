import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageTitle from "../components/styled/PageTitle";
import StyledInternalLink from "../components/styled/StyledInternalLink";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

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
      <animated.div style={slideIn}>
        <PageTitle>{tagHeader}</PageTitle>
      </animated.div>
      <animated.div style={fade}>
        <section>
          <ul>
            {edges.map(({ node }) => {
              const { title, date, path } = node.frontmatter;
              return (
                <li key={path}>
                  <StyledTagLink to={path}>
                    {title} ({date})
                  </StyledTagLink>
                </li>
              );
            })}
          </ul>
          <StyledTagLink reversed to="/tags">
            All tags
          </StyledTagLink>
        </section>
      </animated.div>
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

const StyledTagLink = styled(StyledInternalLink)`
  line-height: 3;
`;
