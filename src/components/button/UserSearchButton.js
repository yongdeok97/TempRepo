import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
  padding: 7px;
  margin-right: 19px;
`;

const Input = styled.input`
  width: 300px;
  height: 32px;
  border: none;
  background-color: #F2F2F2;
  border-radius: 32px;
  padding-left: 16px; 
  /* placeholder 왼쪽 여백 */
  &::placeholder {
    color: #999999; /* placeholder 텍스트 색상 */
  }
`;

export default function UserSearchButton() {
  return (
    <Container>
      <Input
        type="text"
        placeholder="계정 검색"
      />
    </Container>
  );
}
