import React from 'react';
import BottomBarButton from '../button/BottomBarButton';
import styled from 'styled-components';

const Container = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  /* width: 100%; */
  justify-content: space-around;
  border-top: 1px solid #DBDBDB;
  margin-top: 28px;
  background-color: white;

`

export default function TabMenu() {
  return (
    <Container>
      <BottomBarButton id={'icon-home'} text={'홈'} />
      <BottomBarButton id={'icon-message-circle'} text={'메시지'} />
      <BottomBarButton id={'icon-edit'} text={'게시물 추가'} />
      <BottomBarButton id={'icon-user'} text={'프로필'} />
    </Container>
  );
}
