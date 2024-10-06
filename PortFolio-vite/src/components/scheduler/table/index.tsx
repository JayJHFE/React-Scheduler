// import { useSelector } from "react-redux";
// import { RootState } from "../../../redux/store/store";
// import DroppableMinuteDiv from "../dropSchedule/DroppableMinuteDiv";
// import { useState } from "react";
// import DraggableDroppedItem from "../dropSchedule/DraggableDropedItem";

// interface DraggedItem {
//   id: number;
//   name: string;
//   hour: number;
//   minute: number;
// }

// function SchedulerTable() {
//   const rows = useSelector((state: RootState) => state.tableLengthChange.rows); // 현재 상태 조회
//   const [droppedItems, setDroppedItems] = useState<
//     { item: DraggedItem; timeIndex: number }[]
//   >([]); // 여러 드롭된 아이템과 위치를 저장하는 상태
//   const hoursArray = Array.from({ length: 25 }, (_, i) => i); // 24시간으로 변경

//   const handleDrop = (item: DraggedItem, timeIndex: number) => {
//     // 이미 드롭된 아이템을 찾고, 있으면 삭제
//     setDroppedItems((prevDroppedItems) => {
//       const updatedItems = prevDroppedItems.filter(
//         (dropped) => dropped.item.id !== item.id
//       );
//       return [...updatedItems, { item, timeIndex }];
//     });
//   };

//   return (
//     <>
//       <div style={{ position: "relative" }}>
//         {/* div를 data의 길이만큼 생성 */}
//         {rows.map((_, rowIndex) => (
//           <div
//             key={rowIndex}
//             style={{
//               width: "4500px",
//               color: "blue",
//               display: "flex",
//               flexDirection: "row",
//             }}
//           >
//             {hoursArray.map((hourIndex) =>
//               rowIndex === 0 ? (
//                 <div
//                   key={hourIndex}
//                   style={{
//                     width: "180px",
//                     height: "60px",
//                     border: "1px solid black",
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {`${hourIndex.toString().padStart(2, "0")}:00`}
//                 </div>
//               ) : (
//                 <div
//                   key={hourIndex}
//                   style={{
//                     width: "180px",
//                     height: "60px",
//                     border: "1px solid black",
//                     display: "flex",
//                     flexDirection: "row",
//                   }}
//                 >
//                   {/* 60분마다 드롭 가능한 div 생성 */}
//                   {Array.from({ length: 60 }, (_, minuteIndex) => {
//                     const timeIndex = hourIndex * 60 + minuteIndex; // 전체 시간을 기준으로 분 인덱스를 계산

//                     // 드롭된 아이템 필터링
//                     const droppedItem = droppedItems.find(
//                       (dropped) => dropped.timeIndex === timeIndex
//                     );

//                     return (
//                       <div key={minuteIndex} style={{ position: "relative" }}>
//                         {/* 드롭 가능한 영역 */}
//                         <DroppableMinuteDiv
//                           hour={hourIndex}
//                           minute={minuteIndex}
//                           timeIndex={timeIndex}
//                           handleDrop={handleDrop} // 드롭 처리 함수 전달
//                           droppedItems={droppedItems} // 드롭된 아이템 상태 전달
//                         />

//                         {/* 드롭된 아이템을 해당 위치에 렌더링 */}
//                         {droppedItem && (
//                           <DraggableDroppedItem
//                             item={droppedItem.item}
//                             timeIndex={droppedItem.timeIndex}
//                           />
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               )
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default SchedulerTable;

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import DroppableMinuteDiv from "../dropSchedule/DroppableMinuteDiv";
import { useState } from "react";
import DraggableDroppedItem from "../dropSchedule/DraggableDropedItem";

interface DraggedItem {
  id: number;
  name: string;
  hour: number;
  minute: number;
}

function SchedulerTable() {
  const rows = useSelector((state: RootState) => state.tableLengthChange.rows);
  const [rowDroppedItems, setRowDroppedItems] = useState<
    { rowIndex: number; items: { item: DraggedItem; timeIndex: number }[] }[]
  >([]);

  const hoursArray = Array.from({ length: 24 }, (_, i) => i); // 24시간으로 변경

  // 드래그가 시작될 때 기존 위치에서 아이템을 삭제하는 함수
  const handleRemove = (timeIndex: number, rowIndex: number) => {
    setRowDroppedItems((prevRowDroppedItems) =>
      prevRowDroppedItems.map((row) =>
        row.rowIndex === rowIndex
          ? {
              ...row,
              items: row.items.filter(
                (dropped) => dropped.timeIndex !== timeIndex
              ),
            }
          : row
      )
    );
  };

  // 드롭된 아이템을 rowIndex별로 관리하는 함수
  const handleDrop = (
    item: DraggedItem,
    timeIndex: number,
    rowIndex: number
  ) => {
    setRowDroppedItems((prevRowDroppedItems) => {
      const existingRow = prevRowDroppedItems.find(
        (row) => row.rowIndex === rowIndex
      );

      if (existingRow) {
        const itemExists = existingRow.items.some(
          (dropped) => dropped.timeIndex === timeIndex
        );

        if (!itemExists) {
          const updatedItems = [...existingRow.items, { item, timeIndex }];

          return prevRowDroppedItems.map((row) =>
            row.rowIndex === rowIndex ? { ...row, items: updatedItems } : row
          );
        }
      } else {
        return [
          ...prevRowDroppedItems,
          { rowIndex, items: [{ item, timeIndex }] },
        ];
      }
      return prevRowDroppedItems;
    });
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        {rows.map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              width: "4320px",
              color: "blue",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {hoursArray.map((hourIndex) =>
              rowIndex === 0 ? (
                <div
                  key={hourIndex}
                  style={{
                    width: "180px",
                    height: "60px",
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {`${hourIndex.toString().padStart(2, "0")}:00`}
                </div>
              ) : (
                <div
                  key={hourIndex}
                  style={{
                    width: "180px",
                    height: "60px",
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {Array.from({ length: 60 }, (_, minuteIndex) => {
                    const timeIndex = hourIndex * 60 + minuteIndex;

                    const droppedItemsForRow = rowDroppedItems.find(
                      (row) => row.rowIndex === rowIndex
                    )?.items;
                    const droppedItem = droppedItemsForRow?.find(
                      (dropped) => dropped.timeIndex === timeIndex
                    );

                    return (
                      <div key={minuteIndex} style={{ position: "relative" }}>
                        <DroppableMinuteDiv
                          hour={hourIndex}
                          minute={minuteIndex}
                          timeIndex={timeIndex}
                          rowIndex={rowIndex}
                          handleDrop={handleDrop}
                          droppedItems={rowDroppedItems}
                        />

                        {droppedItem && (
                          <DraggableDroppedItem
                            item={droppedItem.item}
                            timeIndex={droppedItem.timeIndex}
                            rowIndex={rowIndex}
                            handleRemove={handleRemove} // 드래그 시작 시 삭제
                          />
                        )}
                      </div>
                    );
                  })}
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
