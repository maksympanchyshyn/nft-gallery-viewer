import { useState, useEffect } from 'react';
import { Alchemy, Network, OwnedNft } from 'alchemy-sdk';

import NFTCard from '../NftCard';
import { CardsRow, Container } from './styled';
import { LOCAL_STORAGE_KEYS, ALCHEMY_API_KEY } from '../../constants';

const config = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const OwnedNftGallery = () => {
  const [ownedNfts, setOwnedNfts] = useState<OwnedNft[]>([]);

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
          <NFTCard key={item.title} item={item} />
        ))}
      </CardsRow>
    </Container>
  );
};

export default OwnedNftGallery;
