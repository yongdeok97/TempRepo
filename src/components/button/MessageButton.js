import React from 'react'
import styled from 'styled-components'
import GlovalSprite from '../Common/GlovalSprite';
const Conatiner = styled.div`
  border: 1px solid #dbdbdb;
  padding: 8px 9px;
  border-radius: 50%;
`;

export default function MessageButtton() {
  return (
    <Conatiner>
      <GlovalSprite id='icon-message-circle' color='white' size='15' />
    </Conatiner>
  )
}
