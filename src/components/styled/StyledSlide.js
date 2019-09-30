import styled from "styled-components";

/** Styled Components */
const SliderWrapper = styled.section`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  height: 65vh;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.2),
    0px 3px 20px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 600px) {
    height: 65vh;
  }

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
    bottom: 5px !important;

    @media screen and (max-width: 600px) {
      bottom: -30px !important;
    }

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

const SliderContainer = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  @media screen and (max-width: 600px) {
    height: 65vh;
  }
`;

const StyledThumbnail = styled.figure`
  position: absolute;
  top: 35%;
  left: 45%;
  transform: translate(-50%, -50%);
  max-width: 420px;
  width: 90%;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.4),
    0px 3px 20px 8px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 600px) {
    top: 35%;
    left: 50%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  figcaption {
    position: absolute;
    top: -5%;
    left: -5%;
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

    @media screen and (max-width: 600px) {
      width: 50px;
      height: 50px;
    }
    @media screen and (max-width: 600px) {
      width: 40px;
      height: 40px;
      top: -3%;
      left: -3%;
      font-size: 1.2rem;
    }
  }
`;

const StyledInfo = styled.div`
  position: absolute;
  top: 45%;
  right: 10%;
  background: #fff;
  opacity: 0.9;
  width: 60%;
  padding: 2rem 3rem;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.2),
    0px 3px 20px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 601px) {
    width: 60%;
    top: 55%;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
  @media screen and (max-width: 400px) {
    width: 80%;
    top: 50%;
  }

  h2 {
    font-size: 2.4rem;
    color: #303030;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    text-align: justify;
    color: var(--paragraph-color);
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 1rem;
  }
`;

export { SliderContainer, SliderWrapper, StyledInfo, StyledThumbnail };
