import Calendar from "../../components/scheduler/calendar";
import * as S from "../../css/mainStyle";
import jsonData from "../../../public/test.json";

export default function Scheduler() {
  const data = jsonData.vehiclces;
  const hoursArray = Array.from({ length: 24 }, (_, i) =>
    i === 0 ? "차량" : i
  );
  return (
    <>
      <S.Container>
        <S.innerContainer>
          <S.calendarContainer>
            <Calendar />
          </S.calendarContainer>
        </S.innerContainer>
      </S.Container>
    </>
  );
}
