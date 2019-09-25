import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import PageTitle from "../components/styled/PageTitle";
import Post from "../components/Post";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Blog" />
      <PageTitle>Blog</PageTitle>
      <div className="post-list">
        {posts.map(post => (
          <Post key={post.node.id} post={post.node} />
        ))}
      </div>
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
