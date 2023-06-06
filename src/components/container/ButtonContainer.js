import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  border: ${(props) => props.typeStyle.color === '#F26E22' ? ('none') : ('1px solid #DBDBDB')};
  width: ${(props) => props.typeStyle.width};
  height: ${(props) => props.typeStyle.height};
  border-radius: ${(props) => props.typeStyle.radius};
  padding: ${(props) => props.typeStyle.padding};
  font-size: ${(props) => props.typeStyle.textSize};
  color: ${(props) => props.typeStyle.textColor};
  background-color: ${(props) => props.typeStyle.color};
  font-weight: 500;

  &:active {
    background-color: ${(props) => props.activeColor};
  }
`;

export default function LButtonContainer({
  text,
  color,
  textColor,
  type,
  activeColor,
}) {
  let typeDeco = {
    width: '',
    height: '',
    color: color,
    textColor: textColor,
    padding: '',
    textSize: '14px',
    radius: '',
  };

  switch (type) {
    case 'L':
      typeDeco.width = '322px'
      typeDeco.height = '44px'
      typeDeco.padding = '13px 0';
      typeDeco.radius = '44px';
      break;
    case 'M':
      typeDeco.width = '120px'
      typeDeco.height = '34px'
      typeDeco.padding = '8px 0';
      typeDeco.radius = '30px';
      break;
    case 'MS':
      typeDeco.width = '90px'
      typeDeco.height = '32px'
      typeDeco.padding = '7px 0';
      typeDeco.radius = '32px';
      break;
    case 'S':
      typeDeco.width = '56px'
      typeDeco.height = '28px'
      typeDeco.padding = '7px 0';
      typeDeco.textSize = '12px';
      typeDeco.radius = '26px';
      break;
    default:
  }
  return (
    <Container typeStyle={typeDeco} activeColor={activeColor}>
      {text}
    </Container>
  );
}
