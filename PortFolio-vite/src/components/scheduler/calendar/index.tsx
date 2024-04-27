import dayjs from "dayjs";
import "dayjs/locale/ko";
import DateAndDay from "./dateAndDay";
import * as S from "../../../css/scheduler.ts";
dayjs.locale("ko");

function Calendar() {
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
