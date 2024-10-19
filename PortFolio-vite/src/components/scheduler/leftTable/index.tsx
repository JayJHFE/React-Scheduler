import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { removeRow } from "../../../redux/slice/tableLengthChangeSlice";

function SchedulerLeftTable() {
  const rows = useSelector((state: RootState) => state.tableLengthChange.rows); // 현재 상태 조회
  const dispatch = useDispatch(); // 디스패치 생성
  const [focusedRow, setFocusedRow] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setFocusedRow(index); // 마우스가 row에 들어오면 focus 설정
  };

  const handleMouseLeave = () => {
    setFocusedRow(null); // 마우스가 나가면 focus 해제
  };

  const handleDelete = (id: number) => {
    dispatch(removeRow(id)); // 삭제 버튼 클릭 시 row 삭제
  };

  return (
    <>
      {/* <div style={{ position: "sticky", top: 0, left: 0, zIndex: 100 }}> */}
      <div>
        {rows.map((row, i) =>
          i === 0 ? (
            <div
              key={i}
              style={{
                zIndex: 100,
                width: "180px",
                height: "60px",
                // backgroundColor: "blue",
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
          ) : (
            <div
              key={row.id}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              style={{
                zIndex: 100,
                width: "180px",
                height: "60px",
                // backgroundColor: "blue",
                display: "flex",
                flexDirection: "column",
                position: "sticky",
                top: `${i * 30}px`,
                left: 0, // 각 div가 서로 다른 위치에 놓이도록 조정
                alignItems: "center",
                justifyContent: "center",
                borderTop: "1px solid #de872d",
              }}
            >
              {row.name}
              {focusedRow === i && (
                <div
                  style={{
                    marginLeft: "10px",
                    width: "180px",
                    height: "80px",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    transform: "translateX(-2.5%) translateY(-40%)",
                    zIndex: 200,
                  }}
                  onClick={() => handleDelete(row.id)} // 삭제 버튼 클릭 시 row 삭제
                >
                  삭제
                </div>
              )}
            </div>
          )
        )}
      </div>
    </>
  );
}
export default SchedulerLeftTable;
