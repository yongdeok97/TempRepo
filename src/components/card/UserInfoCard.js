import React from 'react';
import styled from 'styled-components';
import basicProfile from '../../assets/profile/basic-profile-img-.svg';
import GlovalSprite from '../Common/GlovalSprite';
import FollowButton from '../button/FollowButton';

const UserInfoContainer = styled.div`
  text-align: center;
  border-bottom: 6px solid #C4C4C4;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 14px;
  /* width: 110px; */
  padding: 16px;
`;
const Follower = styled.div``;
const Followings = styled.div`
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
`

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
const Button = styled.div`
  border: 1px solid #DBDBDB;
  padding: 8px 9px;
  /* width: 34px;
  height: 34px; */
  border-radius: 50%;
`;

const FollowText = styled.div`
  font-size: 10px;
  color: #767676;
  margin-top: 6px;
`
// const FollowButton = styled.div``;

export default function UserInfoCard() {
  return (
    <UserInfoContainer>
      <InfoHeader>
        <Follower>
          <BoldText>2950</BoldText>
          <FollowText>follwers</FollowText>
        </Follower>
        <img src={basicProfile} />
        <Followings>
          <BoldBlurText>2000</BoldBlurText>
          <FollowText>following</FollowText>
        </Followings>
      </InfoHeader>
      <UserProfile>
        <BoldText>애월읍 위니브 감귤농장</BoldText>
        <UsetNcikName>@ weniv_Mandarin</UsetNcikName>
        <UserIntoroduce>
          애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장
        </UserIntoroduce>
      </UserProfile>
      <UserInteraction>
        <Button>
          <GlovalSprite id='icon-message-circle' color='white' size='15'/>
        </Button>
        <FollowButton />
        <Button>
          <GlovalSprite id='icon-share' color='white' size='15'/>
        </Button>
      </UserInteraction>
    </UserInfoContainer>
  );
}
