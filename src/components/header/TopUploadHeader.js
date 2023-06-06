import React from 'react';
import HeaderContainer from '../container/HeaderContainer';
import BackButton from '../button/BackButton';
import StorageButton from '../button/StorageButton';


export default function TopUploadHeader() {
  return (
    <HeaderContainer>
      <BackButton />
      <StorageButton />
    </HeaderContainer>
  );
}
