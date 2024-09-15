import { useDispatch } from "react-redux";
import { addRow } from "../../../redux/slice/tableLengthChangeSlice";
import { useState } from "react";

function RightUpperContainer() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // 입력값을 업데이트
  };

  const handleAddRow = () => {
    if (inputValue.trim()) {
      dispatch(addRow({ name: inputValue })); // 입력값을 Redux 액션으로 전달
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
        backgroundColor: "orange",
        alignItems: "center",
      }}
    >
      <div className="right-upper-container__title">할일목록</div>
      <input
        className="right-upper-container__input"
        style={{ width: "200px" }}
        onChange={handleInputChange}
      />
      <button
        className="right-upper-container__button"
        onClick={() => handleAddRow()}
      ></button>
    </div>
  );
}
export default RightUpperContainer;
