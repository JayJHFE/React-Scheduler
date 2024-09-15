import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import { RootState } from "../../../redux/store/store";
// import { addScheduleRow } from "../../../redux/slice/newScheduleSlice";
import { openModal } from "../../../redux/slice/modalShowChangeSlice";
import DraggableRow from "../dragSchedule/draggableRow";
import { useState } from "react";

function RightLowerContainer() {
  const schedulerows = useSelector(
    (state: RootState) => state.newSchedule.schedulerows
  );
  const dispatch = useDispatch();
  const [droppedItems, setDroppedItems] = useState<
    { item: DraggedItem; minuteIndex: number }[]
  >([]);

  return (
    <div className="rightLowerContainer">
      <div className="rightLowerContainer__header">
        <h1>일정 목록</h1>
      </div>
      <button
        className="right-upper-container__button"
        // onClick={() => handleAddRow()}
        onClick={() => dispatch(openModal())}
      ></button>
      <div>
        {schedulerows
          .filter(
            (row) => !droppedItems.some((dropped) => dropped.item.id === row.id)
          ) // 드롭되지 않은 아이템만 표시
          .map((row, i) => (
            <DraggableRow key={row.id} id={row.id} row={row} index={i} />
          ))}
        {/* {schedulerows.map((row, i) => (
          <DraggableRow key={row.id} id={row.id} row={row} index={i} /> // DraggableRow 컴포넌트를 사용해 드래그 가능하게
        ))} */}
      </div>
    </div>
  );
}

export default RightLowerContainer;
