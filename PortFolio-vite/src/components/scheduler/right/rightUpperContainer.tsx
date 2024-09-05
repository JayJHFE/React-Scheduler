import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { increase } from "../../../redux/slice/tableLengthChangeReducer";

function RightUpperContainer() {
  const value = useSelector(
    (state: RootState) => state.tableLengthChange.value
  ); // 현재 상태 조회
  const dispatch = useDispatch();
  return (
    <div
      className="right-upper-container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "300px",
        backgroundColor: "blue",
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
        onClick={() => dispat}
      ></button>
    </div>
  );
}
export default RightUpperContainer;
