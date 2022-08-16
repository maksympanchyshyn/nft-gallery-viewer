import Image from 'next/image';

import { Container, Logo } from './styled';
import WalletConnection from '../WalletConnection';

const Header = () => {
  return (
    <Container>
      <Logo>
        <Image src="/header-logo.png" alt="header-logo" layout="fill" />
      </Logo>
      <WalletConnection />
    </Container>
  );
};

export default Header;
