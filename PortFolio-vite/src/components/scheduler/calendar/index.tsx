import dayjs from "dayjs";
import "dayjs/locale/ko";
import DateAndDay from "./dateAndDay";
import * as S from "../../../css/scheduler.ts";
dayjs.locale("ko");

function Calendar() {
  // // 오늘 날짜
  // const currentDate = dayjs();
  // // 이번달에 해당하는 날짜 수 추출
  // const daysInMonth = currentDate.daysInMonth();

  // // 현재 달의 모든 날짜와 요일에 대한 배열 생성

  // // 현재 달의 모든 날짜에 대한 배열 생성
  // const daysArray = Array.from(
  //   { length: daysInMonth },
  //   (_, index) => index + 1
  // );

  const getAllDaysAndWeekdaysInMonth = (year: number, month: number) => {
    const startDate = dayjs(`${year}-${month}-01`); // 월의 첫 날
    const daysInMonth = startDate.daysInMonth(); // 해당 월의 일수
    const daysWithWeekdays = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = startDate.date(day);
      daysWithWeekdays.push({
        // 날짜
        date: currentDay.format("DD"),
        // 요일 이름
        weekdayName: currentDay.format("dd"),
      });
    }

    return daysWithWeekdays;
  };

  const selectedDate = getAllDaysAndWeekdaysInMonth(2024, 4);
  console.log(selectedDate);

  return (
    <div>
      {/* date의 날짜로 달력 표기 */}
      <div>스케줄러 표기</div>
      <S.rowScheduler>
        {selectedDate?.map((day, idx) => (
          <div key={idx}>
            <DateAndDay day={day.date} date={day.weekdayName} />
          </div>
        ))}
      </S.rowScheduler>
    </div>
  );
}

export default Calendar;
