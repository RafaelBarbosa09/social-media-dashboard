import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10rem 3rem;

  h2 { 
    color: var(--white);
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export const Card = styled.div`
  background: var(--dark-card-bg);
  padding: 1rem 1.5rem;
  border-radius: 0.2em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 20px 0px;
`;

export const CardHeader = styled.header`
  background: var(--dark-card-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  p { 
    color: var(--dark-blue-text);
    font-size: 0.8rem;
    font-weight: 700;
  }
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
    color: var(--white);
    margin: 0;
  }

  p {
    color: var(--dark-blue-text);
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span { 
      font-size: 0.8rem;
      color: var(--lime-green);
      padding-left: 0.3rem;
      font-weight: 700;
    }

    span.down {
      color: var(--bright-red);
    }
  }
`;