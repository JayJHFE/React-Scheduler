import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slice/modalShowChangeSlice";
import { RootState } from "../../../redux/store/store";
// Modal의 root element 설정 (일반적으로 body 하위에 설정)
Modal.setAppElement("#root");

function ScheduleModal() {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen); // Redux 상태에서 모달 열림 상태 가져옴
  const dispatch = useDispatch(); // 액션을 디스패치하기 위한 훅

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => dispatch(closeModal())}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>세부일정 입력</h2>
          <input type="text" placeholder="일정 이름" />
          <input type="text" placeholder="일정 내용" />
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button onClick={() => dispatch(closeModal())}>닫기</button>
      </Modal>
    </div>
  );
}

export default ScheduleModal;
