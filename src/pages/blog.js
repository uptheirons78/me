import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/styled/PageTitle";
import Post from "../components/Post";
import { useSpring, animated, config } from "react-spring";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

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
      <SEO title="Blog" />
      <animated.div style={slideIn}>
        <PageTitle>Blog</PageTitle>
      </animated.div>
      <animated.div style={fade}>
        <div className="post-list">
          {posts.map(post => (
            <Post key={post.node.id} post={post.node} />
          ))}
        </div>
      </animated.div>
    </Layout>
  );
};

export default Blog;

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            path
            author
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
