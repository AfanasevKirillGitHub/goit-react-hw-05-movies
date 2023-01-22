import { HeaderNavLink, NavList } from './Header.styled';

export const Header = () => {
  return (
    <header>
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
