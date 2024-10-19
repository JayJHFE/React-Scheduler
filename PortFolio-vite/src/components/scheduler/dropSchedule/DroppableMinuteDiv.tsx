// import { useDrop } from "react-dnd";

// interface DraggedItem {
//   id: number;
//   name: string;
//   hour: number;
//   minute: number;
// }

// function DroppableMinuteDiv({
//   hour,
//   minute,
//   timeIndex,
//   handleDrop,
//   droppedItems,
// }: {
//   hour: number;
//   minute: number;
//   timeIndex: number;
//   handleDrop: (item: DraggedItem, timeIndex: number) => void;
//   droppedItems: { item: DraggedItem; timeIndex: number }[];
// }) {
//   const [{ isOver, canDrop }, drop] = useDrop({
//     accept: "SCHEDULE",
//     drop: (item: DraggedItem) => handleDrop(item, timeIndex),
//     canDrop: () =>
//       !droppedItems.some((dropped) => dropped.timeIndex === timeIndex),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//       canDrop: monitor.canDrop(),
//     }),
//   });

//   return (
//     <div
//       ref={drop}
//       style={{
//         backgroundColor: isOver ? "lightgreen" : "yellow",
//         width: "3px",
//         height: "100%",
//       }}
//     >
//       {/* 드래그 중일 때 툴팁으로 시간 표시 */}
//       {isOver && canDrop && (
//         <div
//           style={{
//             width: "200px",
//             height: "80px",
//             fontSize: "20px",
//             position: "absolute",
//             top: "-30px",
//             left: "0",
//             backgroundColor: "black",
//             color: "white",
//             padding: "5px",
//             borderRadius: "3px",
//             zIndex: 9999,
//           }}
//         >
//           {`${hour.toString().padStart(2, "0")}:${minute
//             .toString()
//             .padStart(2, "0")}`}{" "}
//           분
//         </div>
//       )}
//     </div>
//   );
// }

// export default DroppableMinuteDiv;

import { useDrop } from "react-dnd";

interface DraggedItem {
  id: number;
  name: string;
  hour: number;
  minute: number;
}

function DroppableMinuteDiv({
  hour,
  minute,
  timeIndex,
  rowIndex,
  handleDrop,
  droppedItems,
}: {
  hour: number;
  minute: number;
  timeIndex: number;
  rowIndex: number;
  handleDrop: (item: DraggedItem, timeIndex: number, rowIndex: number) => void;
  droppedItems: {
    rowIndex: number;
    items: { item: DraggedItem; timeIndex: number }[];
  }[];
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "SCHEDULE",
    drop: (item: DraggedItem) => handleDrop(item, timeIndex, rowIndex),
    canDrop: () => true,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? "lightgreen" : "#C7B199",
        width: "3px",
        height: "100%",
      }}
    >
      {/* 드래그 중일 때 툴팁으로 시간 표시 */}
      {isOver && canDrop && (
        <div
          style={{
            width: "200px",
            height: "80px",
            fontSize: "20px",
            position: "absolute",
            top: "-30px",
            left: "0",
            backgroundColor: "black",
            color: "white",
            padding: "5px",
            borderRadius: "3px",
            zIndex: 9999,
          }}
        >
          {`${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`}{" "}
          분
        </div>
      )}
    </div>
  );
}

export default DroppableMinuteDiv;
