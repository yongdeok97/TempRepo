import React from 'react';
import GlovalSprite from '../Common/GlovalSprite';
import styled from 'styled-components';

const Container = styled.div`
  padding: 13px;
`;
export default function SettingButton() {
  return (
    <Container>
      <GlovalSprite id={'s-icon-more-vertical'} color={'white'}/>
    </Container>
  );
}
