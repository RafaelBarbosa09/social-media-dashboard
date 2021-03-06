import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 3rem 10rem;
  margin-top: -9rem;
`;

export const Card = styled.div`
  background: var(--dark-card-bg);
  padding: 2rem 0;
  border-radius: 0.2em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 20px 0px;
`;

export const CardHeader = styled.header`
  background: var(--dark-card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  p { 
    padding-left: 0.5rem;
    color: var(--dark-blue-text);
    font-size: 0.8rem;
    font-weight: 700;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 3rem;
    color: var(--white);
  }

  p {
    color: var(--dark-blue-text);
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span { 
    font-size: 0.8rem;
    color: var(--lime-green);
    padding-left: 0.3rem;
    font-weight: 700;
  }

  span.down {
    color: var(--bright-red);
  }
`;