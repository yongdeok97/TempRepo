import React, { useState } from 'react';
import FeedCard from '../../components/card/FeedCard';
import UserInfoCard from '../../components/card/UserInfoCard';
import BottomBar from '../../components/Common/BottomBar';
import SquareOrRectangleList from '../../components/Common/SquareOrRectangleList';
import AlbumCard from '../../components/card/AlbumCard';
import BackAndSettingHeader from '../../components/header/BackAndSettingHeader';

export default function ProfilePage() {
  const [showAlbum, setShowAlbum] = useState(true); // 기본적으로 AlbumCard를 보여주도록 설정

  const handleButtonClick = (isAlbum) => {
    setShowAlbum(isAlbum);
  };
  return (
    <>
      <BackAndSettingHeader />
      <UserInfoCard />
      <SquareOrRectangleList
        onButtonClick={handleButtonClick}
        value={showAlbum}
      />
      {showAlbum ? <AlbumCard /> : <FeedCard />}
      <BottomBar />
    </>
  );
}
