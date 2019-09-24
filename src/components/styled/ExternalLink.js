import styled from "styled-components";

export default styled.a`
  color: ${props => (props.reversed ? "#f4f4f4" : "var(--primary-color)")};
  box-shadow: ${props =>
    props.reversed
      ? "0px -30px 0px 0px var(--primary-color) inset"
      : "0px 0px 0px 0px var(--primary-color) inset"};
  border-bottom: ${props =>
    props.reversed ? "none" : "2px solid var(--primary-color)"};
  transition: all 350ms ease-in-out;

  &:hover {
    box-shadow: ${props =>
      props.reversed
        ? "0px 0px 0px 0px var(--primary-color) inset"
        : "0px -30px 0px 0px var(--primary-color) inset"};
    color: ${props => (props.reversed ? "var(--primary-color)" : "#f4f4f4")};
  }
`;
