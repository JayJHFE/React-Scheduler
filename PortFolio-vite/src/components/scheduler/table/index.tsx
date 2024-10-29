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
//   const rows = useSelector((state: RootState) => state.tableLengthChange.rows);
//   const [rowDroppedItems, setRowDroppedItems] = useState<
//     { rowIndex: number; items: { item: DraggedItem; timeIndex: number }[] }[]
//   >([]);

//   const hoursArray = Array.from({ length: 24 }, (_, i) => i); // 24시간으로 변경

//   // 드래그가 시작될 때 기존 위치에서 아이템을 삭제하는 함수
//   const handleRemove = (timeIndex: number, rowIndex: number) => {
//     setRowDroppedItems((prevRowDroppedItems) =>
//       prevRowDroppedItems.map((row) =>
//         row.rowIndex === rowIndex
//           ? {
//               ...row,
//               items: row.items.filter(
//                 (dropped) => dropped.timeIndex !== timeIndex
//               ),
//             }
//           : row
//       )
//     );
//   };

//   // 드롭된 아이템을 rowIndex별로 관리하는 함수
//   const handleDrop = (
//     item: DraggedItem,
//     timeIndex: number,
//     rowIndex: number
//   ) => {
//     setRowDroppedItems((prevRowDroppedItems) => {
//       const existingRow = prevRowDroppedItems.find(
//         (row) => row.rowIndex === rowIndex
//       );

//       if (existingRow) {
//         const itemExists = existingRow.items.some(
//           (dropped) => dropped.timeIndex === timeIndex
//         );

//         if (!itemExists) {
//           const updatedItems = [...existingRow.items, { item, timeIndex }];

//           return prevRowDroppedItems.map((row) =>
//             row.rowIndex === rowIndex ? { ...row, items: updatedItems } : row
//           );
//         }
//       } else {
//         return [
//           ...prevRowDroppedItems,
//           { rowIndex, items: [{ item, timeIndex }] },
//         ];
//       }
//       return prevRowDroppedItems;
//     });
//   };

//   return (
//     <>
//       <div style={{ position: "relative" }}>
//         {rows.map((_, rowIndex) => (
//           <div
//             key={rowIndex}
//             style={{
//               width: "4320px",
//               color: "black",
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
//                     borderLeft: "1px solid #de872d",
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
//                     borderTop: "1px solid #de872d",
//                     borderRight: "1px solid #de872d",
//                     borderLeft: "1px solid #de872d",
//                     display: "flex",
//                     flexDirection: "row",
//                   }}
//                 >
//                   {Array.from({ length: 60 }, (_, minuteIndex) => {
//                     const timeIndex = hourIndex * 60 + minuteIndex;

//                     const droppedItemsForRow = rowDroppedItems.find(
//                       (row) => row.rowIndex === rowIndex
//                     )?.items;
//                     const droppedItem = droppedItemsForRow?.find(
//                       (dropped) => dropped.timeIndex === timeIndex
//                     );

//                     return (
//                       <div key={minuteIndex} style={{ position: "relative" }}>
//                         <DroppableMinuteDiv
//                           hour={hourIndex}
//                           minute={minuteIndex}
//                           timeIndex={timeIndex}
//                           rowIndex={rowIndex}
//                           handleDrop={handleDrop}
//                           droppedItems={rowDroppedItems}
//                         />

//                         {droppedItem && (
//                           <DraggableDroppedItem
//                             // item={droppedItem.item}
//                             // timeIndex={droppedItem.timeIndex}
//                             // rowIndex={rowIndex}
//                             // handleRemove={handleRemove} // 드래그 시작 시 삭제

//                             item={droppedItem.item}
//                             timeIndex={droppedItem.timeIndex}
//                             rowIndex={rowIndex}
//                             handleRemove={handleRemove}
//                             rowDroppedItems={rowDroppedItems}
//                             setRowDroppedItems={setRowDroppedItems}
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
  const selectedDate = useSelector(
    (state: RootState) => state.date.selectedDate
  ); // 선택된 날짜 조회
  const [rowDroppedItems, setRowDroppedItems] = useState<
    { rowIndex: number; items: { item: DraggedItem; timeIndex: number }[] }[]
  >([]);
  const filteredRows = rows.filter((row) => row.date === selectedDate);
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
        <div
          style={{
            width: "4320px",
            color: "black",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#f5ebe0",
          }}
        >
          {hoursArray.map((hourIndex) => (
            <div
              key={hourIndex}
              style={{
                width: "180px",
                height: "60px",
                borderLeft: "1px solid #de872d",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {`${hourIndex.toString().padStart(2, "0")}:00`}
            </div>
          ))}
        </div>

        {filteredRows.map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              width: "4320px",
              color: "black",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {hoursArray.map((hourIndex) => (
              <div
                key={hourIndex}
                style={{
                  width: "180px",
                  height: "60px",
                  borderTop: "1px solid #de872d",
                  borderRight: "1px solid #de872d",
                  borderLeft: "1px solid #de872d",
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
                          // item={droppedItem.item}
                          // timeIndex={droppedItem.timeIndex}
                          // rowIndex={rowIndex}
                          // handleRemove={handleRemove} // 드래그 시작 시 삭제

                          item={droppedItem.item}
                          timeIndex={droppedItem.timeIndex}
                          rowIndex={rowIndex}
                          handleRemove={handleRemove}
                          rowDroppedItems={rowDroppedItems}
                          setRowDroppedItems={setRowDroppedItems}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default SchedulerTable;
