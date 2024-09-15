import { useDrop } from "react-dnd";

interface DraggedItem {
  id: number;
  name: string;
}

function DroppableMinuteDiv({
  minuteIndex,
  handleDrop,
}: {
  minuteIndex: number;
  handleDrop: (item: DraggedItem, minuteIndex: number) => void;
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "SCHEDULE", // 드롭할 수 있는 아이템의 타입
    drop: (item: DraggedItem) => handleDrop(item, minuteIndex), // 아이템이 드롭되었을 때 처리할 함수
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop} // drop 가능하게 ref 연결
      style={{
        backgroundColor: isOver ? "lightgreen" : "yellow",
        width: "3px",
        height: "100%",
        borderRight: "1px solid black",
      }}
    />
  );
}

export default DroppableMinuteDiv;
