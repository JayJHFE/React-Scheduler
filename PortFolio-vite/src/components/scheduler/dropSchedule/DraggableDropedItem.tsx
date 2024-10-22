// import { useDrag } from "react-dnd";

// interface DraggedItem {
//   id: number;
//   name: string;
//   hour: number;
//   minute: number;
// }

// function DraggableDroppedItem({
//   item,
//   timeIndex,
// }: {
//   item: DraggedItem;
//   timeIndex: number; // timeIndex로 변경
// }) {
//   const [{ isDragging }, drag] = useDrag({
//     type: "SCHEDULE",
//     item: { ...item, timeIndex }, // 드래그할 때 해당 아이템과 위치 정보를 보냄
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   return (
//     <div
//       ref={drag}
//       style={{
//         zIndex: 100,
//         position: "absolute",
//         top: 0,
//         left: 0,
//         // backgroundColor: "blue",
//         width: `${item.hour * 180 + item.minute * 3}px`,
//         height: "50px",
//         color: "white",
//         opacity: isDragging ? 0.5 : 1, // 드래그 시 투명도 적용
//         cursor: "move", // 드래그 시 커서 변경
//       }}
//     >
//       {item.name} - {item.hour}:{item.minute}
//     </div>
//   );
// }

// export default DraggableDroppedItem;

import { useDrag } from "react-dnd";

interface DraggedItem {
  id: number;
  name: string;
  hour: number;
  minute: number;
}

function DraggableDroppedItem({
  item,
  timeIndex,
  rowIndex,
  handleRemove,
}: // rowDroppedItems,
// setRowDroppedItems,
{
  item: DraggedItem;
  timeIndex: number;
  rowIndex: number;
  handleRemove: (timeIndex: number, rowIndex: number) => void;
  rowDroppedItems: {
    rowIndex: number;
    items: { item: DraggedItem; timeIndex: number }[];
  }[];
  setRowDroppedItems: React.Dispatch<
    React.SetStateAction<
      { rowIndex: number; items: { item: DraggedItem; timeIndex: number }[] }[]
    >
  >;
}) {
  const [{ isDragging }, drag] = useDrag({
    type: "SCHEDULE",
    item: { ...item, timeIndex, rowIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging() as boolean, // 타입 명시
    }),
    // 드래그가 끝나면 원래 위치에서 아이템을 삭제
    end: (_draggedItem, monitor) => {
      if (monitor.didDrop()) {
        handleRemove(timeIndex, rowIndex);
      }
    },
  });

  return (
    <div
      ref={drag}
      style={{
        zIndex: 100,
        position: "absolute",
        top: 0,
        left: 0,
        width: `${item.hour * 180 + item.minute * 3}px`,
        height: "59px",
        backgroundColor: "#9f8473",
        color: "white",
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        textAlign: "center",
        paddingTop: "20px",
      }}
    >
      {item.name}
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          cursor: "pointer",
        }}
        onClick={() => handleRemove(timeIndex, rowIndex)}
      >
        -
      </div>
    </div>
  );
}

export default DraggableDroppedItem;
