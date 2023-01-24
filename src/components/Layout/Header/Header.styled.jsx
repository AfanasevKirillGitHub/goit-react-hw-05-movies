import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  gap: 40px;
  height: 100px;
  width: 100%;
  z-index: 100;
  position: fixed;
  background-color: black;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-left: 20px;

  @media (min-width: 768px) {
    margin-left: 70px;
    gap: 60px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderNavLink = styled(NavLink)`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 2px 15px;
  border-radius: 60px;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;

  color: #fff;

  &.active {
    color: #ffffff;
    background-color: #e13c52;
    transition: all 1s ease-out;
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    transform: scale(1.1);
    transition: all 0.25s ease-out;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    font-size: 24px;
    padding: 4px 18px;
  }
`;
