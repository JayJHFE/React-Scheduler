import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import DateAndDay from "./dateAndDay";
import * as S from "../../../css/scheduler.ts";
dayjs.locale("ko");

function Calendar() {
  // 현재 연도와 월을 상태로 관리
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  // "오늘" 날짜를 저장하는 상태
  const [today, setToday] = useState<string | null>(null);
  const calendarContainerRef = useRef<HTMLDivElement | null>(null);
  const todayRef = useRef<HTMLDivElement | null>(null);

  // 해당 연도와 월의 모든 일자와 요일을 반환하는 함수
  const getAllDaysAndWeekdaysInMonth = (year: number, month: number) => {
    const startDate = dayjs(`${year}-${month}-01`); // 월의 첫 날
    const daysInMonth = startDate.daysInMonth(); // 해당 월의 일수
    const daysWithWeekdays = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = startDate.date(day);
      daysWithWeekdays.push({
        date: currentDay.format("DD"), // 날짜
        fullDate: currentDay.format("YYYY-MM-DD"), // 전체 날짜 (연-월-일 형식)
        weekdayName: currentDay.format("dd"), // 요일 이름
      });
    }

    return daysWithWeekdays;
  };

  // 현재 선택된 날짜 데이터
  const selectedDate = getAllDaysAndWeekdaysInMonth(currentYear, currentMonth);

  // 이전 달로 이동
  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(12);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // "오늘" 버튼 클릭 시 현재 날짜로 이동
  // const handleTodayClick = () => {
  //   const todayDate = dayjs().format("YYYY-MM-DD");
  //   setCurrentYear(dayjs().year());
  //   setCurrentMonth(dayjs().month() + 1);
  //   setToday(todayDate); // 오늘의 날짜를 저장
  // };

  const handleTodayClick = () => {
    const todayDate = dayjs().format("YYYY-MM-DD");
    setCurrentYear(dayjs().year());
    setCurrentMonth(dayjs().month() + 1);
    setToday(todayDate); // 오늘의 날짜를 저장

    // "오늘" 날짜가 부모 div의 중앙에 오도록 스크롤
    if (todayRef.current && calendarContainerRef.current) {
      const todayElement = todayRef.current;
      const calendarContainer = calendarContainerRef.current;

      // 부모의 중앙 위치 계산
      const containerWidth = calendarContainer.offsetWidth;
      const todayElementLeft = todayElement.offsetLeft;
      const todayElementWidth = todayElement.offsetWidth;

      // 오늘 날짜가 부모 div의 중앙에 오도록 스크롤 위치 계산
      const scrollPosition =
        todayElementLeft - containerWidth / 2 + todayElementWidth / 2;

      // 수동으로 스크롤 설정
      calendarContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (today && todayRef.current && calendarContainerRef.current) {
      setTimeout(() => {
        const todayElement = todayRef.current;
        const calendarContainer = calendarContainerRef.current;

        // 부모의 중앙 위치 계산
        const containerWidth = calendarContainer?.offsetWidth;
        const todayElementLeft = todayElement?.offsetLeft;
        const todayElementWidth = todayElement?.offsetWidth;

        // 오늘 날짜가 부모 div의 중앙에 오도록 스크롤 위치 계산
        const scrollPosition =
          todayElementLeft - containerWidth / 2 + todayElementWidth / 2 - 400;

        // 수동으로 스크롤 설정
        calendarContainer?.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }, 0); // DOM 렌더링 이후 스크롤을 처리
    }
  }, [today, currentYear, currentMonth]);

  console.log(today);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px 50px",
        alignItems: "center",
        // backgroundColor: "blue",
      }}
    >
      <div
        style={{
          // backgroundColor: "green",
          width: "200px",
          fontSize: "30px",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        {currentYear}년 {currentMonth}월
        <div style={{ marginTop: "10px" }}>
          <button
            onClick={handlePrevMonth}
            style={{
              fontSize: "20px",
              backgroundColor: "#c7b199",
              boxShadow: "4px 0px 14px",
              marginRight: "10px",
            }}
          >
            ◀
          </button>
          <button
            onClick={handleNextMonth}
            style={{
              fontSize: "20px",
              backgroundColor: "#c7b199",
              boxShadow: "4px 0px 14px",
            }}
          >
            ▶
          </button>
        </div>
      </div>
      <button
        style={{
          height: "40px",
          backgroundColor: "#c7b199",
          boxShadow: "4px 0px 14px",
        }}
        onClick={handleTodayClick}
      >
        오늘
      </button>

      <div
        ref={calendarContainerRef}
        style={{
          overflow: "auto",
          width: "1000px",
          boxShadow: "4px 0px 14px",
          borderRadius: "40px",
        }}
      >
        <S.rowScheduler>
          {selectedDate?.map((day, idx) => (
            <div
              key={idx}
              ref={today === day.fullDate ? todayRef : null} // 오늘 날짜의 div에 ref 연결
              style={{
                border: today === day.fullDate ? "2px solid blue" : "none", // 오늘이면 파란색 테두리
                borderRadius: today === day.fullDate ? "20px" : "none", // 오늘이면 원형 모양
              }}
            >
              <DateAndDay day={day.date} date={day.weekdayName} />
            </div>
          ))}
        </S.rowScheduler>
      </div>
    </div>
  );
}

export default Calendar;
// import { useState } from "react";
// import dayjs from "dayjs";
// import "dayjs/locale/ko";
// import DateAndDay from "./dateAndDay";
// import * as S from "../../../css/scheduler.ts";
// dayjs.locale("ko");

// function Calendar() {
//   // 현재 연도와 월을 상태로 관리
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

//   // 해당 연도와 월의 모든 일자와 요일을 반환하는 함수
//   const getAllDaysAndWeekdaysInMonth = (year: number, month: number) => {
//     const startDate = dayjs(`${year}-${month}-01`); // 월의 첫 날
//     const daysInMonth = startDate.daysInMonth(); // 해당 월의 일수
//     const daysWithWeekdays = [];

//     for (let day = 1; day <= daysInMonth; day++) {
//       const currentDay = startDate.date(day);
//       daysWithWeekdays.push({
//         date: currentDay.format("DD"), // 날짜
//         weekdayName: currentDay.format("dd"), // 요일 이름
//       });
//     }

//     return daysWithWeekdays;
//   };

//   // 현재 선택된 날짜 데이터
//   const selectedDate = getAllDaysAndWeekdaysInMonth(currentYear, currentMonth);

//   // 이전 달로 이동
//   const handlePrevMonth = () => {
//     if (currentMonth === 1) {
//       setCurrentYear(currentYear - 1);
//       setCurrentMonth(12);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   // 다음 달로 이동
//   const handleNextMonth = () => {
//     if (currentMonth === 12) {
//       setCurrentYear(currentYear + 1);
//       setCurrentMonth(1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         padding: "0px 50px",
//         backgroundColor: "blue",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "green",
//           width: "200px",
//           fontSize: "30px",
//           alignItems: "center",
//           justifyContent: "center",
//           paddingTop: "20px",
//         }}
//       >
//         {currentYear}년 {currentMonth}월
//         <button onClick={handlePrevMonth} style={{ fontSize: "24px" }}>
//           ◀
//         </button>
//         <button>
//           오늘
//         </button>
//         <button onClick={handleNextMonth} style={{ fontSize: "24px" }}>
//           ▶
//         </button>
//       </div>

//       <div style={{ overflow: "auto", width: "1000px" }}>
//         <S.rowScheduler>
//           {selectedDate?.map((day, idx) => (
//             <div key={idx}>
//               <DateAndDay day={day.date} date={day.weekdayName} />
//             </div>
//           ))}
//         </S.rowScheduler>
//       </div>
//     </div>
//   );
// }

// export default Calendar;

// import dayjs from "dayjs";
// import "dayjs/locale/ko";
// import DateAndDay from "./dateAndDay";
// import * as S from "../../../css/scheduler.ts";
// dayjs.locale("ko");

// function Calendar() {
//   const thisMonth = new Date().getMonth() + 1;
//   const getAllDaysAndWeekdaysInMonth = (year: number, month: number) => {
//     const startDate = dayjs(`${year}-${month}-01`); // 월의 첫 날
//     const daysInMonth = startDate.daysInMonth(); // 해당 월의 일수
//     const daysWithWeekdays = [];

//     for (let day = 1; day <= daysInMonth; day++) {
//       const currentDay = startDate.date(day);
//       daysWithWeekdays.push({
//         // 날짜
//         date: currentDay.format("DD"),
//         // 요일 이름
//         weekdayName: currentDay.format("dd"),
//       });
//     }

//     return daysWithWeekdays;
//   };

//   const selectedDate = getAllDaysAndWeekdaysInMonth(2024, thisMonth);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         padding: "0px 50px",
//         backgroundColor: "blue",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "green",
//           width: "200px",
//           fontSize: "30px",
//           alignItems: "center",
//           justifyContent: "center",
//           paddingTop: "20px",
//         }}
//       >
//         {thisMonth}월
//       </div>
//       <div style={{ overflow: "auto", width: "1000px" }}>
//         <S.rowScheduler>
//           {selectedDate?.map((day, idx) => (
//             <div key={idx}>
//               <DateAndDay day={day.date} date={day.weekdayName} />
//             </div>
//           ))}
//         </S.rowScheduler>
//       </div>
//     </div>
//   );
// }

// export default Calendar;
