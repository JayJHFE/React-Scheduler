import dayjs from "dayjs";

function Calendar() {
  // 오늘 날짜
  const currentDate = dayjs();
  // 이번달에 해당하는 날짜 수 추출
  const daysInMonth = currentDate.daysInMonth();

  // 현재 달의 모든 날짜에 대한 배열 생성
  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );
  return (
    <div>
      {/* date의 날짜로 달력 표기 */}
      <div>스케줄러 표기</div>
      {daysArray.map((day) => (
        <div key={day}>{`${currentDate.format("YYYY-MM")}-${day}`}</div>
      ))}
    </div>
  );
}

export default Calendar;
