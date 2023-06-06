import React, { useState } from 'react';
import HomePostCard from '../../components/card/HomePostCard';
import UserInfoCard from '../../components/card/UserInfoCard';
import TabMenu from '../../components/Common/TabMenu';
import AlbumOrList from '../../components/Common/AlbumOrList';
import AlbumCard from '../../components/card/AlbumCard';
import TopBasicNavHeader from '../../components/header/TopBasicNavHeader'


export default function ProfilePage() {
  const [showAlbum, setShowAlbum] = useState(false); // 기본적으로 AlbumCard를 보여주도록 설정

  const handleButtonClick = (isAlbum) => {
    setShowAlbum(isAlbum);
  };
  return (
    <>
      <TopBasicNavHeader />
      <UserInfoCard />
      <AlbumOrList
        onButtonClick={handleButtonClick}
        value={showAlbum}
      />
      {showAlbum ? <AlbumCard /> : <HomePostCard />}
      <TabMenu />
    </>
  );
}
