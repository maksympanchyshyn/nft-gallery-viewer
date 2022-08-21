import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { LOCAL_STORAGE_KEYS } from '../../constants';
import { AccountBtn, ConnectBtn, AccountContainer } from './styled';

const WalletConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [accountBalance, setAccountBalance] = useState('');
  const [accountAddress, setAccountAddress] = useState('');

  const router = useRouter();

  useEffect(() => {
    const checkConnection = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send('eth_accounts', []);

      if (accounts.length > 0) {
        const balance = await provider.getBalance(accounts[0]);
        setAccountAddress(accounts[0]);
        localStorage.setItem(LOCAL_STORAGE_KEYS.CONNECTED_ADDRESS, accounts[0]);
        setAccountBalance(ethers.utils.formatEther(balance));
        setIsConnected(true);
      }
    };

    checkConnection();
    window.ethereum?.on('accountsChanged', checkConnection);
    return () => window.ethereum?.removeListener('accountsChanged', checkConnection);
  }, []);

  const handleAccountClick = () => router.push('/account');

  const handleConnectWalletClick = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    const balance = await provider.getBalance(accounts[0]);

    setAccountAddress(accounts[0]);
    setAccountBalance(ethers.utils.formatEther(balance));
    setIsConnected(true);
  };

  return (
    <AccountContainer>
      {isConnected ? (
        <AccountBtn onClick={handleAccountClick}>
          {`${accountAddress.slice(0, 6)}...${accountAddress.slice(-4)}`} - {accountBalance.slice(0, 5)} ETH
        </AccountBtn>
      ) : (
        <ConnectBtn onClick={handleConnectWalletClick}>Connect Wallet</ConnectBtn>
      )}
    </AccountContainer>
  );
};

export default WalletConnection;
