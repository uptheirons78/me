import styled from "styled-components";

export default styled.footer`
  width: 100%;
  border-top: 1px solid rgba(3, 175, 194, 0.3);
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-brand {
    width: 70%;

    @media screen and (max-width: 600px) {
      width: 100%;
      text-align: center;
    }
  }

  .footer-social {
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;

    @media screen and (max-width: 850px) {
      width: 20%;
    }
    @media screen and (max-width: 700px) {
      width: 25%;
    }

    @media screen and (max-width: 600px) {
      width: 60%;
      justify-content: space-around;
    }

    .social-icon {
      fill: var(--primary-color);
      width: 2.5rem;
      height: 2.5rem;
      transition: all 450ms ease-in-out;

      &:hover {
        fill: #4ca1c3;
        transform: translateY(-5px);
      }
    }
  }
`;
