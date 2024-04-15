function DateAndDay(props: { day: string; date: string }) {
  return (
    <div>
      <p>{`${props.date}`}</p>
      <p>{`${props.day}`}</p>
      <p></p>
    </div>
  );
}
export default DateAndDay;
