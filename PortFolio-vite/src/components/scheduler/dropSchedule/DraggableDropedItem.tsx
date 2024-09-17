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
}: {
  item: DraggedItem;
  timeIndex: number; // timeIndex로 변경
}) {
  const [{ isDragging }, drag] = useDrag({
    type: "SCHEDULE",
    item: { ...item, timeIndex }, // 드래그할 때 해당 아이템과 위치 정보를 보냄
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        zIndex: 100,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "blue",
        width: `${item.hour * 180 + item.minute * 3}px`,
        height: "50px",
        color: "white",
        opacity: isDragging ? 0.5 : 1, // 드래그 시 투명도 적용
        cursor: "move", // 드래그 시 커서 변경
      }}
    >
      {item.name} - {item.hour}:{item.minute}
    </div>
  );
}

export default DraggableDroppedItem;
