import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import DroppableMinuteDiv from "../dropSchedule/DroppableMinuteDiv";
import { useState } from "react";

interface DraggedItem {
  id: number;
  name: string;
  hour: number;
  minute: number;
}

function SchedulerTable() {
  const rows = useSelector((state: RootState) => state.tableLengthChange.rows); // 현재 상태 조회
  const [droppedItems, setDroppedItems] = useState<
    { item: DraggedItem; minuteIndex: number }[]
  >([]); // 여러 드롭된 아이템과 위치를 저장하는 상태
  const hoursArray = Array.from({ length: 25 }, (_, i) => i);

  const handleDrop = (item: DraggedItem, minuteIndex: number) => {
    if (droppedItems.some((dropped) => dropped.item.id === item.id)) {
      return; // 이미 드롭된 아이템이면 무시
    }
    // 드롭된 아이템과 해당 위치를 상태에 추가
    setDroppedItems((prevDroppedItems) => [
      ...prevDroppedItems,
      { item, minuteIndex },
    ]);
    console.log("Dropped item:", item); // 드래그된 객체의 정보
  };

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
            {hoursArray.map((hourIndex) =>
              i == 0 ? (
                <div
                  key={hourIndex}
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
                  key={hourIndex}
                  style={{
                    backgroundColor: "red",
                    width: "180px",
                    height: "60px",
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {/* 60분마다 드롭 가능한 div 생성 */}
                  {Array.from({ length: 60 }, (_, minuteIndex) => {
                    const absoluteMinuteIndex = hourIndex * 60 + minuteIndex; // 전체 시간을 기준으로 분 인덱스를 계산

                    // 드롭된 아이템 필터링
                    const droppedItem = droppedItems.find(
                      (dropped) => dropped.minuteIndex === absoluteMinuteIndex
                    );

                    return (
                      <div key={minuteIndex} style={{ position: "relative" }}>
                        {/* 드롭 가능한 영역 */}
                        <DroppableMinuteDiv
                          minuteIndex={absoluteMinuteIndex}
                          handleDrop={handleDrop} // 드롭 처리 함수 전달
                          droppedItems={droppedItems} // 드롭된 아이템 상태 전달
                        />

                        {/* 드롭된 아이템을 해당 위치에 렌더링 */}
                        {droppedItem && (
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              backgroundColor: "blue",
                              width: `${
                                droppedItem.item.hour * 180 +
                                droppedItem.item.minute * 3
                              }px`,
                              height: "50px",
                              color: "white",
                              zIndex: 10,
                            }}
                          >
                            {droppedItem.item.name} - {droppedItem.item.hour}:
                            {droppedItem.item.minute}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {/* {Array.from({ length: 60 }, (_, minuteIndex) => (
                    <DroppableMinuteDiv
                      key={minuteIndex}
                      minuteIndex={minuteIndex}
                      handleDrop={handleDrop} // 드롭 처리 함수 전달
                    />
                  ))} */}
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
