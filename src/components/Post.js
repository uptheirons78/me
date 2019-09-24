import React from "react";
import { kebabCase } from "lodash";
import StyledPost from "./styled/StyledPost";
import StyledInternalLink from "./styled/StyledInternalLink";
import Paragraph from "./styled/Paragraph";
import styled from "styled-components";

const StyledPostLink = styled(StyledInternalLink)`
  font-size: 2.2rem;
  font-weight: 700;
`;

const Post = ({ post }) => {
  const { title, date, path, tags } = post.frontmatter;

  return (
    <StyledPost>
      <StyledPostLink className="post-title" to={path}>
        {title}
      </StyledPostLink>
      <div className="meta">
        <span className="date">Published: {date}</span>
        {tags ? (
          <div className="tags-container">
            <ul className="tag-list">
              <span>Tags: </span>
              {tags.map(tag => (
                <li className="tag-list-item" key={`tag${tag}`}>
                  <StyledPostLink reversed to={`/tags/${kebabCase(tag)}/`}>
                    {tag}
                  </StyledPostLink>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="read">{post.timeToRead} min read</div>
      <div className="excerpt">
        <Paragraph>{post.excerpt} </Paragraph>
        <StyledPostLink className="more" reversed to={path}>
          Read More
        </StyledPostLink>
      </div>
    </StyledPost>
  );
};

export default Post;
