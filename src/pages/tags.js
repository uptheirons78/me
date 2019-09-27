import React from "react";
import { graphql } from "gatsby";
import { kebabCase } from "lodash";
import SEO from "../components/seo";
import Layout from "../components/layout";
import PageTitle from "../components/styled/PageTitle";
import StyledInternalLink from "../components/styled/StyledInternalLink";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group;

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
      <SEO title="Tags" />
      <animated.div style={slideIn}>
        <PageTitle>All Tags</PageTitle>
      </animated.div>
      <animated.div style={fade}>
        <section>
          <ul>
            {allTags.map(tag => (
              <li key={tag.fieldValue}>
                <StyledTagLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </StyledTagLink>
              </li>
            ))}
          </ul>
        </section>
      </animated.div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const StyledTagLink = styled(StyledInternalLink)`
  line-height: 3;
`;
