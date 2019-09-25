import styled from "styled-components";

const StyledMainWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 60vh;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.2),
    0px 3px 20px 8px rgba(0, 0, 0, 0.1);

  .slick-arrow {
    @media screen and (max-width: 1024px) {
      display: none;
    }

    &.slick-next,
    &.slick-prev {
      display: block;

      &::before {
        color: var(--primary-color);
        font-size: 3rem;
        font-weight: 700;

        @media screen and (max-width: 1024px) {
          display: none;
        }
      }
    }

    &.slick-next {
      &::before {
        content: ">";
        position: absolute;
        right: -10px;
      }
    }

    &.slick-prev {
      &::before {
        content: "<";
        position: absolute;
        left: -10px;
      }
    }
  }

  .slick-dots {
    bottom: -50px !important;
    li {
      button {
        &::before {
          font-size: 8px !important;
        }
      }
      &:hover {
        button {
          &::before {
            color: var(--primary-color) !important;
          }
        }
      }
      &.slick-active {
        button {
          &::before {
            color: var(--primary-color) !important;
          }
        }
      }
    }
  }
`;

const StyledSlideWrapper = styled.section`
  max-width: 100%;
  height: 60vh;
  position: relative;
`;

const StyledLeft = styled.section`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  .image-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-40%) translateY(-60%);
    z-index: 100;
    max-width: 320px;
    box-shadow: 10px 10px 7px 2px rgba(0, 0, 0, 0.2);
    img {
      position: relative;
      object-fit: cover;
      width: 320px;
      max-height: auto;
      @media screen and (max-width: 1024px) {
        max-width: 360px;
      }
      @media screen and (max-width: 869px) {
        max-width: 320px;
      }
      @media screen and (max-width: 600px) {
        max-width: 300px;
      }
    }
    figcaption {
      position: absolute;
      top: -10%;
      left: -8%;
      z-index: 100;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      padding: 0.5rem;
      font-size: 1.4rem;
      color: #f4f4f4;
      background: var(--primary-color);
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 1024px) {
      max-width: 360px;
      top: 40%;
    }
    @media screen and (max-width: 869px) {
      max-width: 320px;
    }
    @media screen and (max-width: 744px) {
      left: 70%;
      top: 35%;
    }
    @media screen and (max-width: 600px) {
      left: 75%;
      top: 35%;
    }
  }
`;

const StyledRight = styled.section`
  padding: 1rem 3rem;
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  .info {
    width: 80%;
    position: absolute;
    bottom: 25%;
    right: 15%;
    padding: 0 1rem;
    @media screen and (max-width: 869px) {
      width: 70%;
      bottom: 30%;
      right: 15%;
    }
    @media screen and (max-width: 744px) {
      width: 120%;
      bottom: 22%;
      right: 38%;
      z-index: 100;
      background: #fff;
      box-shadow: 10px 10px 7px 2px rgba(0, 0, 0, 0.2);
      padding: 1rem 2rem;
      opacity: 0.9;
    }
    @media screen and (max-width: 600px) {
      width: 130%;
      bottom: 16%;
      right: 20%;
    }
    h2 {
      font-size: 2.6rem;
      color: var(--heading-color);
      margin: 1rem 0;
      @media screen and (max-width: 869px) {
        font-size: 2.2rem;
      }
    }
    p {
      font-size: 1.6rem;
      color: var(--paragraph-color);
      margin-bottom: 1rem;
      text-align: justify;
      @media screen and (max-width: 869px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 1.4rem;
      }
    }
    ul {
      width: 60%;
      display: flex;
      list-style-type: none;
      justify-content: space-between;
      @media screen and (max-width: 600px) {
        width: 70%;
      }
    }
  }
`;

export { StyledMainWrapper, StyledSlideWrapper, StyledLeft, StyledRight };
