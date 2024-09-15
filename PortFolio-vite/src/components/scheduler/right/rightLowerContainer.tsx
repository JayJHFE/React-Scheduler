import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../redux/store/store";
import { addScheduleRow } from "../../../redux/slice/newScheduleSlice";

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
      {/* 리덕스 스토어에 전역변수를 등록해서, 일정 목록을 추가함*/}
      {/* <div className="rightLowerContainer__content">
        <div className="rightLowerContainer__content__item">
          <div className="rightLowerContainer__content__item__header">
            <h2>Meeting</h2>
            <p>10:00 AM</p>
          </div>
          <div className="rightLowerContainer__content__item__content">
            <p>Meeting with the team</p>
          </div>
        </div>
        <div className="rightLowerContainer__content__item">
          <div className="rightLowerContainer__content__item__header">
            <h2>Meeting</h2>
            <p>10:00 AM</p>
          </div>
          <div className="rightLowerContainer__content__item__content">
            <p>Meeting with the team</p>
          </div>
        </div>
        <div className="rightLowerContainer__content__item">
          <div className="rightLowerContainer__content__item__header">
            <h2>Meeting</h2>
            <p>10:00 AM</p>
          </div>
          <div className="rightLowerContainer__content__item__content">
            <p>Meeting with the team</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default RightLowerContainer;
