import React from 'react';
import GlovalSprite from '../Common/GlovalSprite';
import styled from 'styled-components';

const Container = styled.div`
  padding: 13px;
  margin-left: 7px;
`;

export default function BackButton() {
  return (
    <Container>
      <GlovalSprite id={'icon-arrow-left'} color={'white'}/>
    </Container>
  );
}
