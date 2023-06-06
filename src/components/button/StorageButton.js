import React from 'react';
import styled from 'styled-components';
import ButtonContainer from '../container/ButtonContainer';

const StorageBtn = styled(ButtonContainer)`
  /* height: 30px; */
  &:active {
    background-color: ${(props) => props.activeColor};
  }
`;

export default function StorageButton() {
  return (
    <StorageBtn
      text={'저장'}
      color={'#F26E22'}
      textColor={'white'}
      type={'MS'}
      activeColor={'#FFC7A7'}  // hover 시에 변경할 배경색
      />
  );
}
