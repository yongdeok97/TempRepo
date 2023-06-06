import React from 'react';
import styled from 'styled-components';

import HeaderContainer from '../container/HeaderContainer';
import BackButton from '../button/BackButton';
import ToUserButton from '../button/ToUserButton';
import SettingButton from '../button/SettingButton';

const BackAndUserText = styled.div`
  display: flex;
  align-items: center;
`


export default function TopChatNavHeader() {
  return (
    <HeaderContainer>
      <BackAndUserText>
        <BackButton />
        <ToUserButton user={'애월읍 위니브 감귤 농장'} />
      </BackAndUserText>
      <SettingButton />
    </HeaderContainer>
  );
}
