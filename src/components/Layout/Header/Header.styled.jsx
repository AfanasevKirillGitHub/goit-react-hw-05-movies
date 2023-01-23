import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



export const HeaderWrapper = styled.header`
  display: flex;
  gap: 40px;
  height: 100px;
  background-color: black;
  margin: 0;
  padding: 0;
  align-items: center;
  `

export const LogoLink = styled(NavLink)`
 text-decoration: none;
`

export const HeaderNav = styled.nav`
    display: flex;
    gap: 100px;
    align-items: center;
    margin-left: 70px;

`
export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

`;


export const HeaderNavLink = styled(NavLink)`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 6px 30px;
  border-radius: 60px; 
  font-size: 24px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #fff;

  &.active {
    color: #ffffff;
    background-color: #E13C52;
    transition: all 1s ease-out;
  }
      
  &:hover:not(.active),
  &:focus:not(.active) {
    transform: scale(1.1);
    transition: all 0.25s ease-out;
  }
`;

