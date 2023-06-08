import React from 'react'
import TopBasicNavHeader from './TopBasicNavHeader'
import TopMainNavHeader from './TopMainNavHeader'
import TopSearchNavHeader from './TopSearchNavHeader'
import TopUploadHeader from './TopUploadHeader'
import TopChatNavHeader from './TopChatNavHeader'
import TabMenu from '../Common/TabMenu'

export default function TestAllHeader() {
  return (
    <>
      <TopBasicNavHeader></TopBasicNavHeader>
      <TopMainNavHeader></TopMainNavHeader>
      <TopSearchNavHeader></TopSearchNavHeader>
      
      <p>container요소 아래 button에만 margin을 잡아 놓음 오류가 있을시 참고</p>
      <TopUploadHeader></TopUploadHeader>
      <TopChatNavHeader></TopChatNavHeader>

      <p>마진 탑 있음. 따라다니게 하고 싶으면 fixed로 수정</p>
      <TabMenu></TabMenu>
    </>
  )
}
