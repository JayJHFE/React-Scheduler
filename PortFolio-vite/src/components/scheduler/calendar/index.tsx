import dayjs from "dayjs";
import DateAndDay from "./dateAndDay";

function Calendar() {
  // 오늘 날짜
  const currentDate = dayjs();
  // 이번달에 해당하는 날짜 수 추출
  const daysInMonth = currentDate.daysInMonth();

  // 현재 달의 모든 날짜와 요일에 대한 배열 생성

  // 현재 달의 모든 날짜에 대한 배열 생성
  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  //각 날짜에 대한 요일 생성
  const dayOfWeek = currentDate.date(1).day();

  return (
    <div>
      {/* date의 날짜로 달력 표기 */}
      <div>스케줄러 표기</div>
      <ul>
        {daysArray.map((day) => (
          <li key={day}>
            {/* {`${day}`} */}
            <DateAndDay
              day={day}
              date={currentDate.date(day).format("YYYY-MM-DD")}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Calendar;
