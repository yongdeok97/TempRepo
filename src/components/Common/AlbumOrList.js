import React, { useState } from 'react';
import styled from 'styled-components';
import GlovalSprite from './GlovalSprite';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 44px;

  border: 0.5px solid #bdbdbd;
`;
const PaddingIcon = styled.div`
  padding: 11px;
`;

export default function AlbumOrList({ onButtonClick, value }) {
  const handleClickAlbum = () => {
    onButtonClick(true); // AlbumCard 보여주기
  };

  const handleClickFeed = () => {
    onButtonClick(false); // FeedCard 보여주기
  };

  return (
    <Container>
      <PaddingIcon onClick={handleClickFeed}>
        {value ? (
          <GlovalSprite id={'icon-post-list-off'} />
        ) : (
          <GlovalSprite id={'icon-post-list-on'} />
        )}
      </PaddingIcon>
      <PaddingIcon onClick={handleClickAlbum}>
        {value ? (
          <GlovalSprite id={'icon-post-album-on'} />
        ) : (
          <GlovalSprite id={'icon-post-album-off'} />
        )}
      </PaddingIcon>
    </Container>
  );
}
