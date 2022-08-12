import { ethers } from 'ethers';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Balance, ConnectBtn, Container, Logo, AccountContainer } from './styled';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [accountBalance, setAccountBalance] = useState('');
  const [accountAddress, setAccountAddress] = useState('');

  useEffect(() => {
    const checkConnection = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send('eth_accounts', []);

      if (accounts.length > 0) {
        const balance = await provider.getBalance(accounts[0]);
        setAccountAddress(accounts[0]);
        setAccountBalance(ethers.utils.formatEther(balance));
        setIsConnected(true);
      }
    };
    checkConnection();
  }, []);

  const connectMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    const balance = await provider.getBalance(accounts[0]);

    setAccountAddress(accounts[0]);
    setAccountBalance(ethers.utils.formatEther(balance));
    setIsConnected(true);
  };

  return (
    <Container>
      <Logo>
        <Image src="/header-logo.png" alt="header-logo" layout="fill" />
      </Logo>
      <AccountContainer>
        {isConnected ? (
          <Balance>
            {`${accountAddress.slice(0, 6)}...${accountAddress.slice(0, 6)}`} - {accountBalance.slice(0, 5)} ETH
          </Balance>
        ) : (
          <ConnectBtn onClick={connectMetamask}>Connect Wallet</ConnectBtn>
        )}
      </AccountContainer>
    </Container>
  );
};

export default Header;
