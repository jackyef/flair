import Link from 'next/link';
import { styled } from 'goober';

import { space } from '@/flair/theme/space';
import { Anchor } from '@/flair/components/Anchor/Anchor';
import { Button } from '@/flair/components/Button/Button';
import { useTheme } from '@/flair/context/theme';

const Container = styled('div')`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: ${space.lg};
`;

const Footer = styled('footer')`
  height: ${space['4xl']};
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
  const { toggleColorScheme } = useTheme();

  return (
    <Container>
      <Nav>
        <NavList>
          <NavItem>
            <Link href="/" passHref>
              <Anchor>/</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/spacing" passHref>
              <Anchor>/spacing</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/typography" passHref>
              <Anchor>/typography</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/colors" passHref>
              <Anchor>/colors</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/buttons" passHref>
              <Anchor>/buttons</Anchor>
            </Link>
          </NavItem>
        </NavList>
        <Button variant="background" onClick={toggleColorScheme}>
          Toggle color scheme
        </Button>
      </Nav>
      {children}
      <Footer />
    </Container>
  );
};
