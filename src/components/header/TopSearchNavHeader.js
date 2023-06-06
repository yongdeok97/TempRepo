import React from 'react'
import HeaderContainer from '../container/HeaderContainer';
import BackButton from '../button/BackButton';
import UserSearchButton from '../button/UserSearchButton';
export default function TopSearchNavHeader() {
  return (
    <HeaderContainer>
      <BackButton />
      <UserSearchButton />
    </HeaderContainer>
  )
}
