import React from 'react'
import styled from 'styled-components'
import dommyImg from '../../assets/dommy/cat-dommy.png'

const Album = styled.div`
  img {
    width: 100%;
  }
`

export default function AlbumButton({img}) {
  return (
    <Album>
      <img src={dommyImg} />
    </Album>
  )
}
