// import { useEffect, useRef, useState } from "react";
// import dayjs from "dayjs";
// import "dayjs/locale/ko";
// import DateAndDay from "./dateAndDay";
// import * as S from "../../../css/scheduler.ts";
// dayjs.locale("ko");

// function Calendar() {
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
//   const [selectedDate, setSelectedDate] = useState<string | null>(null); // 선택된 날짜 상태 추가

//   const calendarContainerRef = useRef<HTMLDivElement | null>(null);
//   const todayRef = useRef<HTMLDivElement | null>(null);

//   const getAllDaysAndWeekdaysInMonth = (year: number, month: number) => {
//     const startDate = dayjs(`${year}-${month}-01`);
//     const daysInMonth = startDate.daysInMonth();
//     const daysWithWeekdays = [];

//     for (let day = 1; day <= daysInMonth; day++) {
//       const currentDay = startDate.date(day);
//       daysWithWeekdays.push({
//         date: currentDay.format("DD"),
//         fullDate: currentDay.format("YYYY-MM-DD"),
//         weekdayName: currentDay.format("dd"),
//       });
//     }

//     return daysWithWeekdays;
//   };

//   const dayInMonth = getAllDaysAndWeekdaysInMonth(currentYear, currentMonth);

//   const handleDateClick = (fullDate: string) => {
//     setSelectedDate(fullDate); // 선택된 날짜를 상태로 업데이트
//   };

//   const handlePrevMonth = () => {
//     if (currentMonth === 1) {
//       setCurrentYear(currentYear - 1);
//       setCurrentMonth(12);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (currentMonth === 12) {
//       setCurrentYear(currentYear + 1);
//       setCurrentMonth(1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   const handleTodayClick = () => {
//     const todayDate = dayjs().format("YYYY-MM-DD");
//     setCurrentYear(dayjs().year());
//     setCurrentMonth(dayjs().month() + 1);
//     // setToday(todayDate); // 오늘의 날짜를 저장
//     setSelectedDate(todayDate);

//     // "오늘" 날짜가 부모 div의 중앙에 오도록 스크롤
//     if (todayRef.current && calendarContainerRef.current) {
//       const todayElement = todayRef.current;
//       const calendarContainer = calendarContainerRef.current;

//       const containerWidth = calendarContainer.offsetWidth;
//       const todayElementLeft = todayElement.offsetLeft;
//       const todayElementWidth = todayElement.offsetWidth;

//       // 오늘 날짜가 부모 div의 중앙에 오도록 스크롤 위치 계산
//       const scrollPosition =
//         todayElementLeft - containerWidth / 2 + todayElementWidth / 2 - 400; // -400을 보정값으로 유지

//       // 스크롤이 중앙으로 맞춰지도록 설정
//       calendarContainer.scrollTo({
//         left: scrollPosition,
//         behavior: "smooth",
//       });
//     }
//   };
//   useEffect(() => {
//     if (selectedDate && todayRef.current && calendarContainerRef.current) {
//       setTimeout(() => {
//         const todayElement = todayRef.current;
//         const calendarContainer = calendarContainerRef.current;

//         const containerWidth = calendarContainer?.offsetWidth;
//         const todayElementLeft = todayElement?.offsetLeft;
//         const todayElementWidth = todayElement?.offsetWidth;

//         const scrollPosition =
//           todayElementLeft - containerWidth / 2 + todayElementWidth / 2 - 400;

//         calendarContainer?.scrollTo({
//           left: scrollPosition,
//           behavior: "smooth",
//         });
//       }, 0); // DOM 렌더링 이후 스크롤을 처리
//     }
//   }, [selectedDate, currentYear, currentMonth]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         padding: "10px 50px",
//         alignItems: "center",
//         backgroundColor: "#D6CCC2",
//       }}
//     >
//       <div
//         style={{
//           width: "200px",
//           fontSize: "30px",
//           alignItems: "center",
//           justifyContent: "center",
//           paddingTop: "20px",
//           backgroundColor: "#D6CCC2",
//         }}
//       >
//         {currentYear}년 {currentMonth}월
//         <div style={{ marginTop: "10px", backgroundColor: "#D6CCC2" }}>
//           <button
//             onClick={handlePrevMonth}
//             style={{
//               fontSize: "20px",
//               backgroundColor: "#c7b199",
//               boxShadow: "4px 0px 14px",
//               marginRight: "10px",
//             }}
//           >
//             ◀
//           </button>
//           <button
//             onClick={handleNextMonth}
//             style={{
//               fontSize: "20px",
//               backgroundColor: "#c7b199",
//               boxShadow: "4px 0px 14px",
//             }}
//           >
//             ▶
//           </button>
//         </div>
//       </div>
//       <button
//         style={{
//           height: "40px",
//           backgroundColor: "#c7b199",
//           boxShadow: "4px 0px 14px",
//         }}
//         onClick={handleTodayClick}
//       >
//         오늘
//       </button>

//       <div
//         ref={calendarContainerRef}
//         style={{
//           overflow: "auto",
//           width: "1000px",
//           boxShadow: "4px 0px 14px",
//           borderRadius: "40px",
//           backgroundColor: "#ffffff",
//           height: "135px",
//         }}
//       >
//         <S.rowScheduler>
//           {dayInMonth?.map((day, idx) => (
//             <div
//               key={idx}
//               ref={selectedDate === day.fullDate ? todayRef : null}
//               style={{
//                 border:
//                   selectedDate === day.fullDate ? "2px solid #de872d" : "none",
//                 borderRadius: selectedDate === day.fullDate ? "20px" : "none",
//               }}
//               onClick={() => handleDateClick(day.fullDate)}
//             >
//               <DateAndDay day={day.date} date={day.weekdayName} />
//             </div>
//           ))}
//         </S.rowScheduler>
//       </div>
//     </div>
//   );
// }

// export default Calendar;

import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../../../redux/slice/dateSlice"; // Redux 액션 가져오기
import { RootState } from "../../../redux/store/store"; // Redux 상태 타입 가져오기
import DateAndDay from "./dateAndDay";
import * as S from "../../../css/scheduler.ts";
dayjs.locale("ko");

function Calendar() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const selectedDate = useSelector(
    (state: RootState) => state.date.selectedDate
  ); // Redux에서 선택된 날짜 가져오기
  const dispatch = useDispatch();

  const calendarContainerRef = useRef<HTMLDivElement | null>(null);
  const todayRef = useRef<HTMLDivElement | null>(null);

  const getAllDaysAndWeekdaysInMonth = (year: number, month: number) => {
    const startDate = dayjs(`${year}-${month}-01`);
    const daysInMonth = startDate.daysInMonth();
    const daysWithWeekdays = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = startDate.date(day);
      daysWithWeekdays.push({
        date: currentDay.format("DD"),
        fullDate: currentDay.format("YYYY-MM-DD"),
        weekdayName: currentDay.format("dd"),
      });
    }

    return daysWithWeekdays;
  };

  const dayInMonth = getAllDaysAndWeekdaysInMonth(currentYear, currentMonth);

  const handleDateClick = (fullDate: string) => {
    dispatch(setSelectedDate(fullDate)); // Redux에 선택된 날짜 저장
  };

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(12);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleTodayClick = () => {
    const todayDate = dayjs().format("YYYY-MM-DD");
    setCurrentYear(dayjs().year());
    setCurrentMonth(dayjs().month() + 1);
    dispatch(setSelectedDate(todayDate)); // 오늘 날짜를 Redux에 저장

    if (todayRef.current && calendarContainerRef.current) {
      const todayElement = todayRef.current;
      const calendarContainer = calendarContainerRef.current;

      const containerWidth = calendarContainer.offsetWidth;
      const todayElementLeft = todayElement.offsetLeft;
      const todayElementWidth = todayElement.offsetWidth;

      const scrollPosition =
        todayElementLeft - containerWidth / 2 + todayElementWidth / 2 - 400;

      calendarContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (selectedDate && todayRef.current && calendarContainerRef.current) {
      setTimeout(() => {
        const todayElement = todayRef.current;
        const calendarContainer = calendarContainerRef.current;

        const containerWidth = calendarContainer?.offsetWidth;
        const todayElementLeft = todayElement?.offsetLeft;
        const todayElementWidth = todayElement?.offsetWidth;

        const scrollPosition =
          todayElementLeft - containerWidth / 2 + todayElementWidth / 2 - 400;

        calendarContainer?.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }, 0); // DOM 렌더링 이후 스크롤을 처리
    }
  }, [selectedDate, currentYear, currentMonth]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px 50px",
        alignItems: "center",
        backgroundColor: "#D6CCC2",
      }}
    >
      <div
        style={{
          width: "200px",
          fontSize: "30px",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
          backgroundColor: "#D6CCC2",
        }}
      >
        {currentYear}년 {currentMonth}월
        <div style={{ marginTop: "10px", backgroundColor: "#D6CCC2" }}>
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
          backgroundColor: "#ffffff",
          height: "135px",
        }}
      >
        <S.rowScheduler>
          {dayInMonth?.map((day, idx) => (
            <div
              key={idx}
              ref={selectedDate === day.fullDate ? todayRef : null}
              style={{
                border:
                  selectedDate === day.fullDate ? "2px solid #de872d" : "none",
                borderRadius: selectedDate === day.fullDate ? "20px" : "none",
              }}
              onClick={() => handleDateClick(day.fullDate)}
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
