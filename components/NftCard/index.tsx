import { useState } from 'react';
import { OwnedNft } from 'alchemy-sdk';

import { Container, Content, Title, Collection, VideoContent } from './styled';

export type NFTCardProps = {
  item: OwnedNft;
};

const NFTCard = ({ item }: NFTCardProps) => {
  const [isVideo, setIsVideo] = useState(false);
  const getItemMedia = () => {
    const media =
      item.media[0]?.gateway || item.media[0]?.raw || item.rawMetadata?.image || item.rawMetadata?.animation_url;
    return media;
  };

  return (
    <Container>
      {isVideo ? (
        <VideoContent src={getItemMedia()} autoPlay itemType="video/mp4" />
      ) : (
        <Content
          src={getItemMedia()}
          onError={() => {
            setIsVideo(true);
          }}
        />
      )}
      <Title>{item.title}</Title>
    </Container>
  );
};

export default NFTCard;
