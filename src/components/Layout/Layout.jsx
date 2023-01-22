import Box from 'components/Box/Box';
import { Header } from 'components/Layout/Header/Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box my="50px" mx="auto" maxWidth={1200}>
        <main>{children}</main>
      </Box>
    </>
  );
};
