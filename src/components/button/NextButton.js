import React from 'react';
import styled from 'styled-components';
import ButtonContainer from '../container/ButtonContainer';

const NextBtn = styled(ButtonContainer)`
  &:active {
    background-color: ${(props) => props.activeColor};
  }
`;

export default function NextButton() {
  return (
    <NextBtn
      text={'다음'}
      color={'#F26E22'}
      textColor={'white'}
      type={'L'}
      activeColor={'#FFC7A7'} // hover 시에 변경할 배경색
    />
  );
}
