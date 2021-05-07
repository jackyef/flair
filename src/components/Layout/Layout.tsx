import Link from 'next/link';
import { css, styled } from 'goober';

import { space } from '@/flair/theme/space';
import { A } from '@/flair/components/Anchor/A';
import { Button } from '@/flair/components/Button/Button';
import { useTheme } from '@/flair/context/theme';

const Container = styled('div')`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: ${space.lg};
`;

const NavList = styled('ul')`
  display: flex;
`;

const NavItem = styled('li')`
  margin: 0 ${space.md};
`;

const Nav = styled('nav')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Layout: React.FC = ({ children }) => {
  const { toggleColorScheme, colorScheme } = useTheme();

  return (
    <Container>
      <Nav>
        <NavList>
          <NavItem>
            <Link href="/" passHref>
              <A>/</A>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/spacing" passHref>
              <A>/spacing</A>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/typography" passHref>
              <A>/typography</A>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/colors" passHref>
              <A>/colors</A>
            </Link>
          </NavItem>
        </NavList>
        <Button variant={colorScheme} onClick={toggleColorScheme}>
          Toggle color scheme
        </Button>
      </Nav>
      {children}
    </Container>
  );
};
