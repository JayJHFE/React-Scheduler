import Modal from "react-modal";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slice/modalShowChangeSlice";
import { RootState } from "../../../redux/store/store";
import { addScheduleRow } from "../../../redux/slice/newScheduleSlice";
import { useState } from "react";
// Modal의 root element 설정 (일반적으로 body 하위에 설정)
Modal.setAppElement("#root");

const hourOptions = Array.from({ length: 13 }, (_, i) => ({
  value: i,
  label: `${i}시`,
}));

const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
  value: i,
  label: `${i}분`,
}));

function ScheduleModal() {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen); // Redux 상태에서 모달 열림 상태 가져옴
  const dispatch = useDispatch(); // 액션을 디스패치하기 위한 훅

  const [name, setName] = useState("");
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [selectedMinute, setSelectedMinute] = useState<number | null>(null);

  // 저장 버튼 클릭 시 디스패치
  const handleSave = () => {
    if (name && selectedHour !== null && selectedMinute !== null) {
      dispatch(
        addScheduleRow({ name, hour: selectedHour, minute: selectedMinute })
      ); // 필요 시 시간을 따로 업데이트할 수 있도록 리듀서를 호출
      // 필요 시 시간을 따로 업데이트할 수 있도록 리듀서를 호출
      dispatch(closeModal()); // 저장 후 모달 닫기
    } else {
      alert("모든 값을 입력해주세요.");
    }
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => dispatch(closeModal())}
        style={{
          overlay: {
            zIndex: 1000, // 오버레이의 z-index를 높임
          },
          content: {
            width: "500px",
            height: "500px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1001,
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
          <input
            type="text"
            placeholder="일정 이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "300px", height: "50px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Select
              options={hourOptions}
              isSearchable={true}
              placeholder="시를 선택하세요"
              onChange={(selectedOption) =>
                setSelectedHour(selectedOption?.value ?? null)
              }
            />
            <Select
              options={minuteOptions}
              isSearchable={true}
              placeholder="분을 선택하세요"
              onChange={(selectedOption) =>
                setSelectedMinute(selectedOption?.value ?? null)
              }
            />
          </div>
          <div>
            <button
              style={{
                // backgroundColor: "red",
                color: "white",
              }}
              onClick={() => dispatch(closeModal())}
            >
              닫기
            </button>
            <button onClick={() => handleSave()}>저장</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ScheduleModal;
