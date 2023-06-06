import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

// 나중에 user이름 받아와서 처리를 해야 하는 부분
export default function ToUserButton({user}) {
  return (
    <Container>{user}</Container>
  )
}
