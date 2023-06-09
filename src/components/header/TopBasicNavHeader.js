import React from 'react';
import HeaderContainer from '../container/HeaderContainer';
import BackButton from '../button/BackButton';
import SettingButton from '../button/SettingButton';


export default function TopBasicNavHeader() {
  return (
    <HeaderContainer>
      <BackButton />
      <SettingButton />
    </HeaderContainer>
  );
}
