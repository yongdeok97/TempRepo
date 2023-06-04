import React from 'react';
import AlbumButton from '../button/AlbumButton';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;

export default function AlbumCard() {
  return (
    <Container>
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
      <AlbumButton />
    </Container>
  );
}
