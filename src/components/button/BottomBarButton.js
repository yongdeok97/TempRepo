import React from 'react'
import styled from 'styled-components'
import GlovalSprite from '../Common/GlovalSprite';


const Container = styled.div`
  width: 85px;
  height: 60px;
  text-align: center;
`
const Button = styled.button`
  background-color: inherit;
  border: none;
  margin: 0;
  padding: 0;
  padding: 10px;
  box-sizing: border-box;
`
const ButtonText = styled.div`
  color: #767676;
  font-size: 14px;
`

export default function BottomBarButton({id, text}) {
  return (
    <Container>
      <Button>
        <GlovalSprite id={id} color={'white'} />
        <ButtonText>{text}</ButtonText>
      </Button>
    </Container>
  )
}
