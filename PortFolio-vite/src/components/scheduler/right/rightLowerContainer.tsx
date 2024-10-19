import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import { RootState } from "../../../redux/store/store";
// import { addScheduleRow } from "../../../redux/slice/newScheduleSlice";
import { openModal } from "../../../redux/slice/modalShowChangeSlice";
import DraggableItem from "../dragSchedule/draggableItem";
import { useState } from "react";

interface DraggedItem {
  id: number;
  name: string;
  hour: number;
  minute: number;
}

function RightLowerContainer() {
  const schedulerows = useSelector(
    (state: RootState) => state.newSchedule.schedulerows
  );
  const dispatch = useDispatch();
  const [droppedItems, setDroppedItems] = useState<
    { item: DraggedItem; minuteIndex: number }[]
  >([]);

  return (
    <div
      className="rightLowerContainer"
      style={{
        height: "300px",
        backgroundColor: "#D5BDaf",
        boxShadow: "4px 0px 14px",
        borderRadius: "20px",
        marginTop: "30px",
        paddingTop: "20px",
      }}
    >
      <div
        className="rightLowerContainer__header"
        style={{ backgroundColor: "#D5BDaf" }}
      >
        일정목록
      </div>
      <button
        className="right-upper-container__button"
        // onClick={() => handleAddRow()}
        onClick={() => dispatch(openModal())}
        style={{
          width: "80px",
          minHeight: "30px",
          border: "none",
          borderRadius: "10px",
          marginTop: "20px",
          backgroundColor: "#f5ebe0",
          textAlign: "center",
          fontSize: "14px",
          height: "fit-content",
        }}
      >
        추가
      </button>
      <div>
        {schedulerows
          .filter(
            (row) => !droppedItems.some((dropped) => dropped.item.id === row.id)
          ) // 드롭되지 않은 아이템만 표시
          .map((row, i) => (
            <DraggableItem key={row.id} id={row.id} row={row} index={i} />
          ))}
        {/* {schedulerows.map((row, i) => (
          <DraggableRow key={row.id} id={row.id} row={row} index={i} /> // DraggableRow 컴포넌트를 사용해 드래그 가능하게
        ))} */}
      </div>
    </div>
  );
}

export default RightLowerContainer;
