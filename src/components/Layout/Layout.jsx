import { Header } from 'components/Layout/Header/Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
