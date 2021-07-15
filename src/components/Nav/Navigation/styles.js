import styled from "styled-components";

export const Container = styled.header`
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff2058;

  nav {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 0;
    margin: 0 2rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    
    &:hover,
    &:active,
    &.active {
      color: #560061;
    }
  }
`;
