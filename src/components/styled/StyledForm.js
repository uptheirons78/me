import styled from "styled-components";

const StyledFormWrapper = styled.div`
  max-width: 500px;
  margin: 3rem auto;
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 2.2rem;
  color: var(--primary-color);
  text-transform: uppercase;
`;

const StyledForm = styled.form`
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem;
  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  color: var(--paragraph-color);
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.2),
    0px 3px 20px 8px rgba(0, 0, 0, 0.1);

  label {
    display: block;
    padding: 1rem 0 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid var(--meta-color);
    padding: 0.5rem;
    border-radius: 5px;
    font-family: "Nunito", sans-serif;
    font-size: 1.6rem;
    color: var(--paragraph-color);
  }

  #message {
    margin-bottom: 1rem;
  }

  #sendBtn {
    border: 0;
    border-radius: 5px;
    background: var(--primary-color);
    padding: 1rem 0.5rem;
    color: #fff;
    margin: 2rem 0;
    width: 100%;
    text-transform: uppercase;
    transition: all 0.35s ease-in-out;
    cursor: pointer;

    &:hover {
      background: #19747e;
    }
  }
`;

export { StyledFormWrapper, StyledH2, StyledForm };
