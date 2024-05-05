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
          {/* {data.forEach((vehicle) => {
            console.log(vehicle.name);
          })} */}
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
