import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #F26E22;
  padding: 8px 40px;
  border: none;
  border-radius: 20px;
  color: white;
`;

export default function FollowButton() {
  return (
    <Button>팔로우</Button>
  );
}
