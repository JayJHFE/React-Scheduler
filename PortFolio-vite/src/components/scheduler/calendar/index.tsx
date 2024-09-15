import dayjs from "dayjs";
import "dayjs/locale/ko";
import DateAndDay from "./dateAndDay";
import * as S from "../../../css/scheduler.ts";
dayjs.locale("ko");

function Calendar() {
  const thisMonth = new Date().getMonth() + 1;
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

  const selectedDate = getAllDaysAndWeekdaysInMonth(2024, thisMonth);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0px 50px",
        backgroundColor: "blue",
      }}
    >
      <div
        style={{
          backgroundColor: "green",
          width: "200px",
          fontSize: "30px",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        {thisMonth}
      </div>
      <div style={{ overflow: "auto", width: "1000px" }}>
        <S.rowScheduler>
          {selectedDate?.map((day, idx) => (
            <div key={idx}>
              <DateAndDay day={day.date} date={day.weekdayName} />
            </div>
          ))}
        </S.rowScheduler>
      </div>
    </div>
  );
}

export default Calendar;
