import Calendar from "../../components/scheduler/calendar";
import * as S from "../../css/mainStyle";

export default function Scheduler() {
  return (
    <>
      <S.Container>
        메인컨테이너
        <Calendar />
        <S.innerContainer>
          하단 컨테이너
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
