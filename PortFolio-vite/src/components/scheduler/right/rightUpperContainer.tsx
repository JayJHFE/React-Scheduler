import { useDispatch, useSelector } from "react-redux";
import { addRow } from "../../../redux/slice/tableLengthChangeSlice";
import { useState } from "react";
import { RootState } from "../../../redux/store/store";

function RightUpperContainer() {
  const [inputValue, setInputValue] = useState("");
  const selectedDate = useSelector(
    (state: RootState) => state.date.selectedDate
  );
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // 입력값을 업데이트
  };

  const handleAddRow = () => {
    if (inputValue.trim() && selectedDate) {
      dispatch(addRow({ name: inputValue, date: selectedDate })); // 입력값을 Redux 액션으로 전달
      setInputValue(""); // 입력값 초기화
    }
  };
  return (
    <div
      className="right-upper-container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "300px",
        backgroundColor: "#D5BDaf",
        boxShadow: "4px 0px 14px",
        borderRadius: "20px",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <div
        className="right-upper-container__title"
        style={{ backgroundColor: "#D5BDaf" }}
      >
        할일목록
      </div>
      <input
        className="right-upper-container__input"
        style={{
          width: "200px",
          height: "30px",
          border: "none",
          borderRadius: "10px",
          marginTop: "20px",
          paddingLeft: "10px",
          boxShadow: "1px 2px 3px 0px rgba(0, 0, 0, 0.25)",
        }}
        onChange={handleInputChange}
      />
      <button
        className="right-upper-container__button"
        style={{
          width: "80px",
          height: "30px",
          border: "none",
          borderRadius: "10px",
          marginTop: "20px",
          backgroundColor: "#f5ebe0",
          textAlign: "center",
          fontSize: "14px",
        }}
        onClick={() => handleAddRow()}
      >
        추가
      </button>
    </div>
  );
}
export default RightUpperContainer;
