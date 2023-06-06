import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 13px;
  margin-left: 7px;
  div {
    font-weight: 500;
    font-size: 18px;
  }
`;

export default function BackButton() {
  return (
    <Container>
      <div>감귤마켓 피드</div>
    </Container>
  );
}
