import { useDrag } from "react-dnd";

interface Row {
  id: number;
  name: string;
  hour: number;
  minute: number;
}

interface DraggableItemProps {
  row: Row; // row의 타입을 명시적으로 지정
  id: number;
  index: number;
}

function DraggableItem({ row, index }: DraggableItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "SCHEDULE", // 고유 타입
    item: { id: row.id, name: row.name, hour: row.hour, minute: row.minute }, // 드래그할 때 넘길 데이터
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag} // 드래그 가능하게 만들기 위해 ref를 연결
      style={{
        zIndex: 100,
        width: "160px",
        height: "60px",
        backgroundColor: isDragging ? "lightgreen" : "#9f8473", // 드래그 중인 경우 색상을 변경
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: `${index * 30}px`,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        opacity: isDragging ? 0.5 : 1,
        borderRadius: "10px",
        boxShadow: "1px 2px 3px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      {row.name}
    </div>
  );
}

export default DraggableItem;
