function SchedulerTable() {
  //25개의 시간을 만들어서 차량을 넣어준다.

  const hoursArray = Array.from({ length: 25 }, (_, i) => i);
  return (
    <>
      <div
        style={{
          width: "4500px",
          color: "blue",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* hourArray 를 data의 길이만큼 생성*/}
        {hoursArray.map((hour, index) => (
          <div
            style={{
              backgroundColor: "red",
              width: "180px",
              height: "30px",
              border: "1px solid black",
            }}
            key={index}
          >
            {hour}
          </div>
        ))}
      </div>
    </>
  );
}
export default SchedulerTable;
