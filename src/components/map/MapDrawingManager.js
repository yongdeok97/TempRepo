// import React from 'react'
// import { Map, MapMarker, DrawingManager } from 'react-kakao-maps-sdk';
// export default function MapDrawingManager() {
//   return (
//     <DrawingManager
//           ref={managerRef}
//           onStateChanged={handleStateChanged}
//           drawingMode={[
//             kakao.maps.drawing.OverlayType.ARROW,
//             kakao.maps.drawing.OverlayType.CIRCLE,
//             kakao.maps.drawing.OverlayType.ELLIPSE,
//             kakao.maps.drawing.OverlayType.MARKER,
//             kakao.maps.drawing.OverlayType.POLYLINE,
//             kakao.maps.drawing.OverlayType.RECTANGLE,
//             kakao.maps.drawing.OverlayType.POLYGON,
//           ]}
//           guideTooltip={["draw", "drag", "edit"]}
//           markerOptions={{
//             // 마커 옵션입니다
//             draggable: true, // 마커를 그리고 나서 드래그 가능하게 합니다
//             removable: true, // 마커를 삭제 할 수 있도록 x 버튼이 표시됩니다
//           }}
//           polylineOptions={{
//             // 선 옵션입니다
//             draggable: true, // 그린 후 드래그가 가능하도록 설정합니다
//             removable: true, // 그린 후 삭제 할 수 있도록 x 버튼이 표시됩니다
//             editable: true, // 그린 후 수정할 수 있도록 설정합니다
//             strokeColor: "#39f", // 선 색
//             hintStrokeStyle: "dash", // 그리중 마우스를 따라다니는 보조선의 선 스타일
//             hintStrokeOpacity: 0.5, // 그리중 마우스를 따라다니는 보조선의 투명도
//           }}
//           rectangleOptions={{
//             draggable: true,
//             removable: true,
//             editable: true,
//             strokeColor: "#39f", // 외곽선 색
//             fillColor: "#39f", // 채우기 색
//             fillOpacity: 0.5, // 채우기색 투명도
//           }}
//           circleOptions={{
//             draggable: true,
//             removable: true,
//             editable: true,
//             strokeColor: "#39f",
//             fillColor: "#39f",
//             fillOpacity: 0.5,
//           }}
//           polygonOptions={{
//             draggable: true,
//             removable: true,
//             editable: true,
//             strokeColor: "#39f",
//             fillColor: "#39f",
//             fillOpacity: 0.5,
//             hintStrokeStyle: "dash",
//             hintStrokeOpacity: 0.5,
//           }}
//           arrowOptions={{
//             draggable: true, // 그린 후 드래그가 가능하도록 설정합니다
//             removable: true, // 그린 후 삭제 할 수 있도록 x 버튼이 표시됩니다
//             editable: true, // 그린 후 수정할 수 있도록 설정합니다
//             strokeColor: "#39f", // 선 색
//             hintStrokeStyle: "dash", // 그리중 마우스를 따라다니는 보조선의 선 스타일
//             hintStrokeOpacity: 0.5, // 그리중 마우스를 따라다니는 보조선의 투명도
//           }}
//           ellipseOptions={{
//             draggable: true,
//             removable: true,
//             editable: true,
//             strokeColor: "#39f",
//             fillColor: "#39f",
//             fillOpacity: 0.5,
//           }}
//         />
//   )
// }
