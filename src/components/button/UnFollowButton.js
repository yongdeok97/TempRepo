import React from 'react';
import styled from 'styled-components';
import ButtonContainer from '../container/ButtonContainer';

const UnFollowBtn = styled(ButtonContainer)`
  border: 1px solid #DBDBDB;
  &:active {
    background-color: ${(props) => props.activeColor};
  }
`;

export default function UnFollowButton() {
  return (
    <UnFollowBtn
      text={'언팔로우'}
      color={'white'}
      textColor={'#767676'}
      type={'M'}
      activeColor={'#FFC7A7'} // hover 시에 변경할 배경색
    />
  );
}
