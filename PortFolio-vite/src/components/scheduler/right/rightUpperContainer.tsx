import { useDispatch } from "react-redux";
import { addRow } from "../../../redux/slice/tableLengthChangeReducer";
import { useState } from "react";

function RightUpperContainer() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
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
      />
      <button
        className="right-upper-container__button"
        onClick={() => dispatch(addRow())}
      ></button>
    </div>
  );
}
export default RightUpperContainer;
