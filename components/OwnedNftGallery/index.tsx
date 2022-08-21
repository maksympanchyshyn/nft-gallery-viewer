import { useState, useEffect } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';

import { LOCAL_STORAGE_KEYS, ALCHEMY_API_KEY } from '../../constants';
import { CardsRow, Container, NFTCard } from './styled';

const config = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const OwnedNftGallery = () => {
  const [ownedNfts, setOwnedNfts] = useState<any[]>([]);

  const getOwnedNfts = async (address: string) => {
    const nfts = await alchemy.nft.getNftsForOwner(address);
    setOwnedNfts(nfts.ownedNfts);
  };

  useEffect(() => {
    const address = localStorage.getItem(LOCAL_STORAGE_KEYS.CONNECTED_ADDRESS);
    if (address) {
      getOwnedNfts(address);
    }
  }, []);

  return (
    <Container>
      <CardsRow>
        {ownedNfts.map((item) => (
          <NFTCard key={item.tokenId}>{item.title}</NFTCard>
        ))}
      </CardsRow>
    </Container>
  );
};

export default OwnedNftGallery;
