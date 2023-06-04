import React from 'react';
import styled from 'styled-components';
import GlovalSprite from '../Common/GlovalSprite';
import basicImg from '../../assets/profile/basic-profile.svg';
import dommyImg from '../../assets/dommy/post-img-example.png';

const FeedContainer = styled.div`
  /* width: 358px; */
  display: flex;
  margin: 0 auto;
  padding: 16px;
`;

const FeedImgProfile = styled.div`
  width: 168px;
  height: 168px;
`;
const FeedUserProfile = styled.div`
  /* padding: 4px 0 0 12px; */
`;
const FeedNickName = styled.div`
  font-size: 12px;
  color: #767676;
`;
const UserFeedText = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;
const UserProfileImg = styled.img`
  width: 42px;
`
const UserFeedImg = styled.img`
  width: 100%;
`;
const FavoritAndComment = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;
const FeedDate = styled.div`
  font-size: 10px;
  margin-top: 18px;
  color: #767676;
`;
const Comment = styled.div``;
const Favorite = styled.div``;

const Count = styled.span`
  vertical-align: 7px;
  margin-left: 8px;
  color: #767676;
`;

export default function FeedCard() {
  return (
    <FeedContainer>
      <FeedImgProfile>
        <UserProfileImg src={basicImg}/>
      </FeedImgProfile>
      <FeedUserProfile>
        <div>애월읍 위니브 감귤농장</div>
        <FeedNickName>@ weniv_Mandarin</FeedNickName>
        <UserFeedText>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </UserFeedText>
        <UserFeedImg src={dommyImg} />
        <FavoritAndComment>
          <Favorite>
            <GlovalSprite id='icon-heart' color='white' />
            <Count>58</Count>
          </Favorite>
          <Comment>
            <GlovalSprite id='icon-message-circle' color='white' />
            <Count>12</Count>
          </Comment>
        </FavoritAndComment>
        <FeedDate>2023년 06월 03일</FeedDate>
      </FeedUserProfile>
    </FeedContainer>
  );
}
