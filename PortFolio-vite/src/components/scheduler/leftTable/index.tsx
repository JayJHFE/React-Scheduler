import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { decrease } from "../../../redux/slice/tableLengthChangeReducer";

function SchedulerLeftTable() {
  const value = useSelector(
    (state: RootState) => state.tableLengthChange.value
  ); // 현재 상태 조회
  const dispatch = useDispatch(); // 디스패치 생성
  {
    /*항상 실제 데이터보다 1크게작성해줘야함 */
  }
  const data = 6;
  return (
    <>
      {/* <div style={{ position: "sticky", top: 0, left: 0, zIndex: 100 }}> */}
      <div>
        {Array.from({ length: data }, (_, i) =>
          i === 0 ? (
            <div
              key={i}
              style={{
                zIndex: 100,
                width: "180px",
                height: "30px",
                backgroundColor: "blue",
                display: "flex",
                flexDirection: "column",
                position: "sticky",
                top: 0,
                left: 0,
              }}
            >
              할일목록
            </div>
          ) : (
            <div
              key={i}
              style={{
                zIndex: 100,
                width: "180px",
                height: "30px",
                backgroundColor: "blue",
                display: "flex",
                flexDirection: "column",
                position: "sticky",
                top: `${i * 30}px`,
                left: 0, // 각 div가 서로 다른 위치에 놓이도록 조정
              }}
            >
              1
            </div>
          )
        )}
      </div>
    </>
  );
}
export default SchedulerLeftTable;
