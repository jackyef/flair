import Link from 'next/link';
import { styled } from 'goober';

import { space } from '@/flair/theme/space';
import { A } from '@/flair/components/Anchor/A';

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

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <nav>
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
      </nav>
      {children}
    </Container>
  );
};
