import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import DroppableMinuteDiv from "../dropSchedule/DroppableMinuteDiv";

interface DraggedItem {
  id: number;
  name: string;
}

function SchedulerTable() {
  const rows = useSelector((state: RootState) => state.tableLengthChange.rows); // 현재 상태 조회
  const schedulerows = useSelector(
    (state: RootState) => state.newSchedule.schedulerows
  );
  const dispatch = useDispatch(); // 디스패치 생성
  const hoursArray = Array.from({ length: 25 }, (_, i) => i);

  const handleDrop = (item: DraggedItem) => {};

  return (
    <>
      <div style={{ position: "relative" }}>
        {/* div를 data의 길이만큼 생성 */}
        {/* 첫번째 div만 다른 이름을 가진 div로 생성 */}
        {rows.map((_, i) => (
          // i == 0 ? () : ()
          <div
            key={i}
            style={{
              width: "4500px",
              color: "blue",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {hoursArray.map((index) =>
              i == 0 ? (
                <div
                  key={index}
                  style={{
                    backgroundColor: "red",
                    width: "180px",
                    height: "60px",
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  시간들어가
                </div>
              ) : (
                <div
                  key={index}
                  style={{
                    backgroundColor: "red",
                    width: "180px",
                    height: "60px",
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {Array.from({ length: 60 }, (_, minuteIndex) => (
                    <DroppableMinuteDiv
                      key={minuteIndex}
                      minuteIndex={minuteIndex}
                      handleDrop={handleDrop} // 드롭 처리 함수 전달
                    />
                  ))}
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default SchedulerTable;
