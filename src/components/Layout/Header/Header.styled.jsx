import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// export const LogoContainer = styled.div`
//   position: absolute;
//   top: 40px;
//   left: 40px;
// `;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
  height: 100px;
  background-color: black;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  height: 100%;
  padding: 5px 15px 10px 15px;
  font-size: 28px;
  border-radius: 8px;
  color: #fff;

  &.active {
    text-decoration: underline;
    color: #ffffff;
    background-color: #fd4141;
    transition: all 1s ease-out;
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    transform: scale(1.1);
    transition: all 0.25s ease-out;
  }
`;
