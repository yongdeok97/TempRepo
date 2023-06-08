import React from 'react';
import styled from 'styled-components';
import basicProfile from '../../assets/profile/basic-profile-img-.svg';
import MFollowButton from '../button/MFollowButton';
import ShareButton from '../button/ShareButton';
import MessageButtton from '../button/MessageButton';

const Container = styled.div`
  text-align: center;
  border-bottom: 6px solid #c4c4c4;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 14px;
  padding: 16px;
`;
const UserProfile = styled.div`
  text-align: center;
`;
const BoldText = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const BoldBlurText = styled.div`
  font-weight: bold;
  color: #767676;
  font-size: 18px;
`;

const UsetNcikName = styled.div`
  color: #767676;
  font-size: 12px;
`;
const UserIntoroduce = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #767676;
`;
const UserInteraction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 10px;
  margin-bottom: 26px;
`;

const FollowText = styled.div`
  font-size: 10px;
  color: #767676;
  margin-top: 6px;
`;

export default function UserInfoCard() {
  return (
    <Container>
      <InfoHeader>
        <div>
          <BoldText>2950</BoldText>
          <FollowText>follwers</FollowText>
        </div>
        <img src={basicProfile} />
        <div>
          <BoldBlurText>2000</BoldBlurText>
          <FollowText>following</FollowText>
        </div>
      </InfoHeader>
      <UserProfile>
        <BoldText>애월읍 위니브 감귤농장</BoldText>
        <UsetNcikName>@ weniv_Mandarin</UsetNcikName>
        <UserIntoroduce>
          애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장
        </UserIntoroduce>
      </UserProfile>
      <UserInteraction>
        <MessageButtton />
        <MFollowButton />
        <ShareButton />
      </UserInteraction>
    </Container>
  );
}