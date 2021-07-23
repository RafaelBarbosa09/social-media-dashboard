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

  .toggle {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .toggle span {
    /* margin-right: 8px; */
  }

  .switch {
    position: relative;
    display: block;
    width: 50px;
    height: 25px;
    margin-bottom: 30px;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background: var(--dark-blue-text);
    transition: .5s;
    border: 0;
    /* border: 3px solid white; */
    /* box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1); */
  }

  .slider:before {
    position: absolute;
    content: "";
    left: 3px; 
    /* bottom: 10px; */
    top: 4px;
    background: var(--top-bg-light);
    transition: .5s;
  }

  .switch input {
    display: none;
  }

  input:checked + .slider {
    background: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  }

  input:checked + .slider:before {
    transform: translateX(25px);
    background: var(--very-dark-blue-bg);
  }

  .slider.round {
    border-radius: 35px;
  }


  .slider.round:before {
    width: 40%;
    height: 70%;
    border-radius: 50%;
    /* transform: rotate(-45deg); */
  }

`;