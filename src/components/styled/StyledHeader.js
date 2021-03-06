import styled from "styled-components";

export default styled.header`
  width: 100%;

  .container {
    width: 100%;

    nav {
      width: 100%;
      height: 8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .navbar-brand {
        text-decoration: none;
        font-size: 2.2rem;
        color: var(--primary-color);
        font-family: "Open Sans", sans-serif;
        font-weight: 800;
      }

      .nav-list {
        display: flex;
        list-style-type: none;

        .nav-item {
          position: relative;
          line-height: 8rem;
          transition-delay: 0.5s;
          visibility: hidden;

          &:nth-child(1) .nav-link {
            transition-delay: 0.1s;
          }
          &:nth-child(2) .nav-link {
            transition-delay: 0.2s;
          }
          &:nth-child(3) .nav-link {
            transition-delay: 0.3s;
          }
          &:nth-child(4) .nav-link {
            transition-delay: 0.4s;
          }
          &:nth-child(5) .nav-link {
            transition-delay: 0.5s;
          }

          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--primary-color);
            left: 0;
            bottom: 0;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 650ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          &:hover::before {
            transform: scaleX(1);
            transform-origin: left;
          }

          .nav-link {
            font-size: 1.8rem;
            font-family: "OpenSans", sans-serif;
            font-weight: 700;
            color: var(--primary-color);
            text-decoration: none;
            display: block;
            margin: 0 2rem;
            transform: scaleX(0);
            transition: transform 650ms;
          }
        }

        &.active {
          .nav-link {
            transform: scaleX(1);
          }
          .nav-item {
            transition-delay: initial;
            visibility: visible;

            &:nth-child(1) .nav-link {
              transition-delay: 0.5s;
            }
            &:nth-child(2) .nav-link {
              transition-delay: 0.4s;
            }
            &:nth-child(3) .nav-link {
              transition-delay: 0.3s;
            }
            &:nth-child(4) .nav-link {
              transition-delay: 0.2s;
            }
            &:nth-child(5) .nav-link {
              transition-delay: 0.1s;
            }
          }
        }
      }

      .hamburger {
        width: 3.6rem;
        height: 1.8rem;
        position: relative;
        cursor: pointer;
        line-height: 5rem;
        z-index: 1500;

        .line {
          width: 100%;
          height: 2px;
          background-color: var(--primary-color);
          position: absolute;
          display: block;
          right: 0;
          transition: all 650ms;

          &:focus {
            outline: none !important;
          }

          &:nth-child(1) {
            top: 0;
          }
          &:nth-child(2) {
            top: 50%;
            margin-top: -1px;
            width: 2.8rem;
          }
          &:nth-child(3) {
            top: 100%;
            margin-top: -2px;
            width: 2rem;
          }
        }

        &.active {
          &:focus {
            outline: none !important;
          }
          .line {
            &:nth-child(1) {
              transform: translateY(0.8rem) rotate(45deg);
              width: 2rem;
            }
            &:nth-child(2) {
              opacity: 0;
            }
            &:nth-child(3) {
              transform: translateY(-0.8rem) rotate(-45deg);
              width: 2rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .nav-list {
      width: 100%;
      height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--primary-color);
      position: fixed;
      z-index: 1400;
      left: 0;
      bottom: -100vh;
      transition: bottom 650ms;

      &.active {
        bottom: 0;

        .nav-item:nth-child(1) .nav-link {
          color: #f4f4f4;
        }
        .nav-item:nth-child(2) .nav-link {
          color: #f4f4f4;
        }
        .nav-item:nth-child(3) .nav-link {
          color: #f4f4f4;
        }
        .nav-item:nth-child(4) .nav-link {
          color: #f4f4f4;
        }
        .nav-item:nth-child(5) .nav-link {
          color: #f4f4f4;
        }
      }
    }

    .hamburger.active {
      & .line {
        &:nth-child(1) {
          background-color: #fff;
        }
        &:nth-child(3) {
          background-color: #fff;
        }
      }
    }
  }
`;
