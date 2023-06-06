import React from 'react';
import HeaderContainer from '../container/HeaderContainer';
import FeedSearchButton from '../button/FeedSearchButton';
import MainButton from '../button/MainButton'

export default function TopMainNavHeader() {
  return (
    <HeaderContainer>
      <MainButton />
      <FeedSearchButton />
    </HeaderContainer>
  );
}
