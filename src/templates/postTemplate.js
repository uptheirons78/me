import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import PageTitle from '../components/styled/PageTitle';
import Paragraph from '../components/styled/Paragraph';
import StyledPostFrontmatter from '../components/styled/StyledPostFrontmatter';
import StyledPostWrapper from '../components/styled/StyledPostWrapper';
import StyledImageContainer from '../components/styled/StyledImageContainer';
import StyledPostBody from '../components/styled/StyledPostBody';

const postTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={[...frontmatter.tags]} />
      <StyledPostWrapper>
        <StyledPostFrontmatter>
          <PageTitle>{frontmatter.title}</PageTitle>
          <Paragraph>Published: {frontmatter.date}</Paragraph>
          <StyledImageContainer>
            <Img className='featured-image' fluid={frontmatter.thumbnail.childImageSharp.fluid} />
          </StyledImageContainer>
        </StyledPostFrontmatter>
        <StyledPostBody dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPostWrapper>
    </Layout>
  );
};

export default postTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
