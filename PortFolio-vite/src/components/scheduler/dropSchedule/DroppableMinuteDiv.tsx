import { useDrop } from "react-dnd";

interface DraggedItem {
  id: number;
  name: string;
  hour: number;
  minute: number;
}

function DroppableMinuteDiv({
  minuteIndex,
  handleDrop,
  droppedItems,
}: {
  minuteIndex: number;
  handleDrop: (item: DraggedItem, minuteIndex: number) => void;
  droppedItems: { item: DraggedItem; minuteIndex: number }[];
}) {
  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: "SCHEDULE", // 드롭할 수 있는 아이템의 타입
  //   drop: (item: DraggedItem) => handleDrop(item, minuteIndex), // 아이템이 드롭되었을 때 처리할 함수
  //   canDrop: () =>
  //     !droppedItems.some((dropped) => dropped.minuteIndex === minuteIndex), // 이미 드롭된 곳에는 드롭 불가
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //     canDrop: monitor.canDrop(),
  //   }),
  // }));

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "SCHEDULE",
    drop: (item: DraggedItem) => handleDrop(item, minuteIndex),
    canDrop: () =>
      !droppedItems.some((dropped) => dropped.minuteIndex === minuteIndex), // 에러가 나는 부분
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop} // drop 가능하게 ref 연결
      style={{
        backgroundColor: isOver ? "lightgreen" : "yellow",
        width: "3px",
        height: "100%",
      }}
    />
  );
}

export default DroppableMinuteDiv;
