import styled from "styled-components";

export default styled.article`
  margin-bottom: 3rem;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(3, 175, 194, 0.3);
  }

  .post-title {
    color: var(--heading-color);
  }

  .meta {
    display: flex;
    font-size: 1.4rem;
    color: var(--meta-color);
    margin-top: 2vh;

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }

    .date {
      color: var(--meta-color);
      padding-right: 0.5rem;
      border-right: 2px solid var(--primary-color);

      @media screen and (max-width: 600px) {
        border-right: none;
      }
    }
  }

  .tags-container {
    height: 0;
    margin-bottom: 2vh;

    .tag-list {
      list-style-type: none;
      display: flex;
      margin-left: 0.5rem;
      margin-top: 0;

      @media screen and (max-width: 600px) {
        margin-left: 0;
        margin-top: 1rem;
      }

      a {
        margin-right: 1rem;
        font-size: 1.4rem;
        padding: 0 6px;
      }
    }

    span {
      color: var(--meta-color);
      margin-right: 0.5rem;
    }
  }

  .read {
    font-size: 1.4rem;
    color: var(--meta-color);
    margin-top: 1rem;
    @media screen and (max-width: 600px) {
      margin-top: 2rem;
    }
  }

  .excerpt {
    text-align: justify;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .more {
    display: inline-block;
    font-size: 1.4rem;
    padding: 0 6px;
    margin-bottom: 1rem;
    &:hover {
      border-bottom: none;
    }
  }
`;
