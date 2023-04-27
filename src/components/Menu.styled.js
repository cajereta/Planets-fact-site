import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 90%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  background-color:rgb(9, 6, 36);
  opacity:1;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(+100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(+100%)'};
  z-index:9;
  
  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 1rem;
    font-weight: bold;
    letter-spacing: 0.5rem;

    text-decoration: none;
    transition: color 0.3s linear;
    

  }
`;