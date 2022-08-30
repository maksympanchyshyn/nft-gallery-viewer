import Image from 'next/image';
import { useRouter } from 'next/router';

import { Container, Logo } from './styled';
import WalletConnection from '../WalletConnection';

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <Logo onClick={() => router.push('/')}>
        <Image src="/header-logo.png" alt="header-logo" layout="fill" />
      </Logo>
      <WalletConnection />
    </Container>
  );
};

export default Header;
