import Calendar from "../../components/scheduler/calendar";
import * as S from "../../css/mainStyle";
import jsonData from "../../../public/test.json";

export default function Scheduler() {
  const data = jsonData.vehiclces;
  console.log(data);
  console.log(typeof data);
  return (
    <>
      <S.Container>
        메인컨테이너
        <Calendar />
        <S.innerContainer>
          {data &&
            data[0].map((vehicle) => (
              <div key={vehicle.id}>차량 이름: {vehicle.name}</div>
            ))}
          <div>
            좌측 컨테이너
            <div>스케줄러 표기</div>
          </div>
          <div>
            우측 컨테이너
            <div>일정용 리스트 표기</div>
          </div>
        </S.innerContainer>
      </S.Container>
    </>
  );
}
