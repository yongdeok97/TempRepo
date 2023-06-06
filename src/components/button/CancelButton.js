import React from 'react';
import styled from 'styled-components';
import ButtonContainer from '../container/ButtonContainer';

const CancelBtn = styled(ButtonContainer)`
  border: 1px solid #DBDBDB;
  &:active {
    background-color: ${(props) => props.activeColor};
  }
`;

export default function CancelButton() {
  return (
    <CancelBtn
      text={'취소'}
      color={'white'}
      textColor={'#767676'}
      type={'S'}
      activeColor={'#FFC7A7'} // hover 시에 변경할 배경색
    />
  );
}
