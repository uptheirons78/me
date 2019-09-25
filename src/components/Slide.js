import React from "react";
import {
  StyledSlideWrapper,
  StyledLeft,
  StyledRight,
} from "./styled/StyledSlide";
import ExternalLink from "./styled/ExternalLink";

const Page = props => {
  const { date, title, description, website, github, thumbnail } = props;

  return (
    <StyledSlideWrapper>
      <StyledLeft>
        <figure className="image-container">
          <img src={thumbnail} alt={title} />
          <figcaption>{date}</figcaption>
        </figure>
      </StyledLeft>
      <StyledRight>
        <div className="info">
          <h2>{title}</h2>
          <p>{description}</p>
          <ul>
            <li>
              <ExternalLink href={website} target="_blank ">
                Website
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={github} target="_blank ">
                {" "}
                Github
              </ExternalLink>
            </li>
          </ul>
        </div>
      </StyledRight>
    </StyledSlideWrapper>
  );
};

export default Page;
