import styled from 'styled-components';

export default styled.section`
  width: 100%;
  font-size: 10px;

  @media screen and (max-width: 600px) {
    font-size: 9px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    color: var(--primary-color);
    letter-spacing: 1px;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--paragraph-color);
    letter-spacing: 1px;
    line-height: 1.4;
    margin: 1rem 0;
    text-align: justify;

    @media screen and (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  strong {
    color: var(--primary-color);
  }

  em {
    color: var(--primary-color);
    font-size: 1.6rem;
    font-style: italic;
  }

  li {
    font-size: 1.6rem;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
  }

  a,
  a:active,
  a:visited {
    color: var(--heading-color);
    box-shadow: 0px 0px 0px 0px var(--primary-color) inset;
    border-bottom: 3px solid var(--primary-color);
    transition: all 350ms ease-in-out;
    &:hover {
      box-shadow: 0px -30px 0px 0px var(--primary-color) inset;
      color: #f4f4f4;
    }
  }

  a:active,
  a:focus {
    outline: none;
  }

  code {
    font-size: 1.6rem;
  }
`;
