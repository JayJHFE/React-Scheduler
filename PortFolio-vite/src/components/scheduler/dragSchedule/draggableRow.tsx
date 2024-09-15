import { useDrag } from "react-dnd";

interface Row {
  id: number;
  name: string;
  content: string;
}

interface DraggableRowProps {
  row: Row; // row의 타입을 명시적으로 지정
  index: number;
}

function DraggableRow({ row, index }: DraggableRowProp) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "SCHEDULE", // 고유 타입
    item: { id: row.id, name: row.name }, // 드래그할 때 넘길 데이터
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag} // 드래그 가능하게 만들기 위해 ref를 연결
      style={{
        zIndex: 100,
        width: "180px",
        height: "60px",
        backgroundColor: isDragging ? "lightgreen" : "blue", // 드래그 중인 경우 색상을 변경
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: `${index * 30}px`,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        cursor: "move", // 드래그 중임을 알리기 위한 마우스 커서
        opacity: isDragging ? 0.5 : 1, // 드래그 중일 때 투명하게
      }}
    >
      {row.name}
    </div>
  );
}

export default DraggableRow;
