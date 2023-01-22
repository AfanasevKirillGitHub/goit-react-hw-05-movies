import { HeaderNavLink, NavList } from './Header.styled';
import logo from '../../../images/logo.svg';

export const Header = () => {
  return (
    <header>
      {/* <LogoContainer>
        <img src={logo} width="150" alt="" />
      </LogoContainer> */}
      <nav>
        <NavList>
          <li>
            <HeaderNavLink to="">Home</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink to="movies">Movies</HeaderNavLink>
          </li>
        </NavList>
      </nav>
    </header>
  );
};
