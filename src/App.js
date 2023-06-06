import React from 'react';

import HomePostPage from './pages/PostPage/HomePostPage'
import ProfilePage from './pages/ProfilePage/ProfilePage';


import MapDrawingManager from './components/map/MapDrawingManager';
import GetMapsAndLocation from './components/map/GetMapsAndLocation';


import TestAllButton from './components/button/TestAllButton';
import TestAllHeader from './components/header/TestAllHeader';
export default function App() {
  return (
    <>
      <GetMapsAndLocation />
    </>
  );
}
