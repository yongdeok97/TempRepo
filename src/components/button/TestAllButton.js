import React from 'react';
import styled from 'styled-components';

import NextButton from './NextButton';
import MFollowButton from './MFollowButton';
import UnFollowButton from './UnFollowButton';
import StorageButton from './StorageButton'
import SFollowButton from './SFollowButton';
import CancelButton from './CancelButton';

import SettingButton from './SettingButton';
import ShareButton from './ShareButton';
import MessageButtton from './MessageButton';
import BackButton from './BackButton';

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const SVGButton = styled.div`

`

export default function TestAllButton() {
  return (
    <>
      <BasicContainer>
        <p>전체적으로 수정을 원하거나 전체 컨테이너의 모습을 보고 싶으면</p>
        <p>'../container/ButtonContainer'</p>

        <p>NextButton.js</p>
        <NextButton></NextButton>

        <p>MFollowButton.js \ UnFollowButton.js</p>
        <MFollowButton></MFollowButton>
        <UnFollowButton></UnFollowButton>

        <p>StorageButton.js</p>
        <StorageButton></StorageButton>

        <p>SFollowButton.js \ CancelButton.js</p>
        <SFollowButton></SFollowButton>
        <CancelButton></CancelButton>
      </BasicContainer>

      <SVGButton>
        <SettingButton />
        <ShareButton />
        <BackButton />
        <MessageButtton />
      </SVGButton>
    </>
  );
}
