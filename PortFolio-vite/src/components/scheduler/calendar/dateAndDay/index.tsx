function dateAndDay(props: { day: number }) {
  return (
    <div>
      <p class="dayweek"></p>
      <p class="day">{`${props.day}`}</p>
      <p class="dispatch"></p>
    </div>
  );
}
export default dateAndDay;
