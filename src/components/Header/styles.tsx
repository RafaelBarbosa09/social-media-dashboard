import styled from "styled-components";

export const Container = styled.header`
  background: var(--very-dark-blue-top-bg);
  display: flex;
  justify-content: space-between;
  height: 15rem;
  padding: 3rem 10rem;

  h1 { 
    color: var(--white);
  }

  span {
    color: var(--blue-text);
    font-size: 0.9rem;
    font-weight: 700;
  }
`;