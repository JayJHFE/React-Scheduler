import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../redux/store/store";
import { addScheduleRow } from "../../../redux/slice/newScheduleSlice";
import DraggableRow from "../dragSchedule/draggableRow";

function RightLowerContainer() {
  const schedulerows = useSelector(
    (state: RootState) => state.newSchedule.schedulerows
  );
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // 입력값을 업데이트
  };

  const handleAddRow = () => {
    if (inputValue.trim()) {
      console.log(schedulerows);
      dispatch(addScheduleRow({ name: inputValue, content: inputValue })); // 입력값을 Redux 액션으로 전달
      setInputValue(""); // 입력값 초기화
    }
  };
  return (
    <div className="rightLowerContainer">
      <div className="rightLowerContainer__header">
        <h1>일정 목록</h1>
      </div>
      <input
        className="right-upper-container__input"
        style={{ width: "200px" }}
        onChange={handleInputChange}
      />
      <button
        className="right-upper-container__button"
        onClick={() => handleAddRow()}
      ></button>
      <div>
        {schedulerows.map((row, i) => (
          <DraggableRow key={row.id} row={row} index={i} /> // DraggableRow 컴포넌트를 사용해 드래그 가능하게
        ))}
        {/* {schedulerows.map((row, i) => (
          <div
            key={row.id}
            style={{
              zIndex: 100,
              width: "180px",
              height: "60px",
              backgroundColor: "blue",
              display: "flex",
              flexDirection: "column",
              position: "sticky",
              top: `${i * 30}px`,
              left: 0, // 각 div가 서로 다른 위치에 놓이도록 조정
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {row.name}
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default RightLowerContainer;
