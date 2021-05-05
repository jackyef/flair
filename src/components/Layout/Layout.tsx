import Link from 'next/link'
import { styled } from 'goober';

import { space } from '@/theme/space';

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
`

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <nav>
        <NavList>
          <NavItem><Link href="/" passHref><a>/</a></Link></NavItem>
          <NavItem><Link href="/spacing" passHref><a>/spacing</a></Link></NavItem>
          <NavItem><Link href="/typography" passHref><a>/typography</a></Link></NavItem>
          <NavItem><Link href="/colors" passHref><a>/colors</a></Link></NavItem>
        </NavList>
      </nav>
      {children}
    </Container>
  );
};
