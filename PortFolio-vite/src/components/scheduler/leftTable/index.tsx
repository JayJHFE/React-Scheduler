// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../../../redux/store/store";
// import { removeRow } from "../../../redux/slice/tableLengthChangeSlice";

// function SchedulerLeftTable() {
//   const rows = useSelector((state: RootState) => state.tableLengthChange.rows); // 현재 상태 조회
//   const selectedDate = useSelector(
//     (state: RootState) => state.date.selectedDate
//   ); // 선택된 날짜 조회
//   const dispatch = useDispatch(); // 디스패치 생성
//   const [focusedRow, setFocusedRow] = useState<number | null>(null);

//   const handleMouseEnter = (index: number) => {
//     setFocusedRow(index); // 마우스가 row에 들어오면 focus 설정
//   };

//   const handleMouseLeave = () => {
//     setFocusedRow(null); // 마우스가 나가면 focus 해제
//   };

//   const handleDelete = (id: number) => {
//     dispatch(removeRow(id)); // 삭제 버튼 클릭 시 row 삭제
//   };

//   const filteredRows = rows.filter((row) => row.date === selectedDate); // 선택된 날짜에 해당하는 row만 필터링
//   console.log(rows);
//   console.log(filteredRows);
//   return (
//     <>
//       {/* <div style={{ position: "sticky", top: 0, left: 0, zIndex: 100 }}> */}
//       <div>
//         {rows.map((row, i) =>
//           i === 0 || filteredRows.length === 0 ? (
//             <div
//               key={i}
//               style={{
//                 zIndex: 100,
//                 width: "180px",
//                 height: "60px",
//                 // backgroundColor: "blue",
//                 display: "flex",
//                 flexDirection: "column",
//                 position: "sticky",
//                 top: 0,
//                 left: 0,
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               할일목록
//             </div>
//           ) : (
//             <div
//               key={row.id}
//               onMouseEnter={() => handleMouseEnter(i)}
//               onMouseLeave={handleMouseLeave}
//               style={{
//                 zIndex: 100,
//                 width: "180px",
//                 height: "60px",
//                 // backgroundColor: "blue",
//                 display: "flex",
//                 flexDirection: "column",
//                 position: "sticky",
//                 top: `${i * 30}px`,
//                 left: 0, // 각 div가 서로 다른 위치에 놓이도록 조정
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderTop: "1px solid #de872d",
//                 backgroundColor: focusedRow === i ? "#f5ebe0" : "transparent",
//               }}
//             >
//               {/* {row.name} */}
//               {focusedRow !== i && <span>{row.name}</span>}
//               {focusedRow === i && (
//                 <div
//                   style={{
//                     marginLeft: "10px",
//                     width: "180px",
//                     height: "60px",
//                     color: "black",
//                     border: "none",
//                     cursor: "pointer",
//                     transform: "translateX(-2.5%) translateY(0%)",
//                     backgroundColor: "#ffffff",
//                     zIndex: 500,
//                     paddingTop: "15px",
//                   }}
//                   onClick={() => handleDelete(row.id)} // 삭제 버튼 클릭 시 row 삭제
//                 >
//                   삭제
//                 </div>
//               )}
//             </div>
//           )
//         )}
//       </div>
//     </>
//   );
// }
// export default SchedulerLeftTable;

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { removeRow } from "../../../redux/slice/tableLengthChangeSlice";

function SchedulerLeftTable() {
  const rows = useSelector((state: RootState) => state.tableLengthChange.rows); // 현재 상태 조회
  const selectedDate = useSelector(
    (state: RootState) => state.date.selectedDate
  ); // 선택된 날짜 조회
  const dispatch = useDispatch(); // 디스패치 생성
  const [focusedRow, setFocusedRow] = useState<number | null>(null);

  // 선택된 날짜가 변경될 때마다 리렌더링 보장
  useEffect(() => {
    setFocusedRow(null); // 선택된 날짜가 바뀔 때마다 초기화
  }, [selectedDate, rows]);

  const handleMouseEnter = (index: number) => {
    setFocusedRow(index); // 마우스가 row에 들어오면 focus 설정
  };

  const handleMouseLeave = () => {
    setFocusedRow(null); // 마우스가 나가면 focus 해제
  };

  const handleDelete = (id: number) => {
    dispatch(removeRow(id)); // 삭제 버튼 클릭 시 row 삭제
  };

  // 선택된 날짜와 일치하는 항목만 필터링
  const filteredRows = rows.filter((row) => row.date === selectedDate);

  return (
    <>
      <div>
        {/* 할일목록 헤더 - 항상 존재 */}
        <div
          style={{
            zIndex: 100,
            width: "180px",
            height: "60px",
            display: "flex",
            flexDirection: "column",
            position: "sticky",
            top: 0,
            left: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          할일목록
        </div>

        {/* 조건부 렌더링: 선택된 날짜에 맞는 항목이 있을 경우 렌더링 */}
        {filteredRows.length > 0
          ? filteredRows.map((row, i) => (
              <div
                key={row.id}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                style={{
                  zIndex: 100,
                  width: "180px",
                  height: "60px",
                  display: "flex",
                  flexDirection: "column",
                  position: "sticky",
                  top: `${(i + 1) * 30}px`,
                  left: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTop: "1px solid #de872d",
                  backgroundColor: focusedRow === i ? "#f5ebe0" : "transparent",
                }}
              >
                {focusedRow !== i && <span>{row.name}</span>}
                {focusedRow === i && (
                  <div
                    style={{
                      marginLeft: "10px",
                      width: "180px",
                      height: "60px",
                      color: "black",
                      border: "none",
                      cursor: "pointer",
                      transform: "translateX(-2.5%) translateY(0%)",
                      backgroundColor: "#ffffff",
                      zIndex: 500,
                      paddingTop: "15px",
                    }}
                    onClick={() => handleDelete(row.id)} // 삭제 버튼 클릭 시 row 삭제
                  >
                    삭제
                  </div>
                )}
              </div>
            ))
          : // 선택된 날짜에 맞는 항목이 없을 경우, 아무것도 추가하지 않고 '할일목록'만 렌더링
            rows.length === 1 && ""}
      </div>
    </>
  );
}

export default SchedulerLeftTable;
