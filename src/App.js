import React from 'react';

import HomePostPage from './pages/PostPage/HomePostPage'
import ProfilePage from './pages/ProfilePage/ProfilePage';


import MapDrawingManager from './components/map/MapDrawingManager';


import TestAllButton from './components/button/TestAllButton';
import TestAllHeader from './components/header/TestAllHeader';


import GetLocation from './components/map/GetLocation';
export default function App() {
  return (
    <>
      <GetLocation />
    </>
  );
}
