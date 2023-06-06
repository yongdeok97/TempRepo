import React from 'react';
import styled from 'styled-components';
import ButtonContainer from '../container/ButtonContainer';

const FollowBtn = styled(ButtonContainer)`
  &:active {
    background-color: ${(props) => props.activeColor};
  }
`;

export default function MFollowButton() {
  return (
    <FollowBtn
      text={'팔로우'}
      color={'#F26E22'}
      textColor={'white'}
      type={'M'}
      activeColor={'#FFC7A7'} // hover 시에 변경할 배경색
    />
  );
}
