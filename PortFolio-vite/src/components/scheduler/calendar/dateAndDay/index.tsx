import * as S from "../../../../css/dateAndDay.ts";

function DateAndDay(props: { day: string; date: string }) {
  return (
    <S.dateDiv>
      <p>{`${props.date}`}</p>
      <p>{`${props.day}`}</p>
      <p></p>
    </S.dateDiv>
  );
}
export default DateAndDay;
