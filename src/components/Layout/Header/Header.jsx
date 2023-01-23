import { HeaderNavLink, NavList, NavItem, HeaderWrapper, HeaderNav, LogoLink } from './Header.styled';
import logo from '../../../images/logo.png';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderNav>
        <LogoLink to="">
          <img src={logo} width="70" alt="logo" />
        </LogoLink>
        <NavList>
          <NavItem>
            <HeaderNavLink to="">Home</HeaderNavLink>
          </NavItem>
          <NavItem>
            <HeaderNavLink to="movies">Movies</HeaderNavLink>
          </NavItem>
        </NavList>
      </HeaderNav>
    </HeaderWrapper>
  );
};
