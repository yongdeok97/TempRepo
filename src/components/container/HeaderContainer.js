import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  border: 0.5px solid #dbdbdb;
  height: 48px;
  background-color: white;
`

export default function HeaderContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
