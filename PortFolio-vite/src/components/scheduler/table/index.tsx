function SchedulerTable() {
  const hoursArray = Array.from({ length: 24 }, (_, i) =>
    i === 0 ? "차량" : i
  );
  return (
    <>
      <div style={{ color: "blue", display: "flex", flexDirection: "row" }}>
        {/* 사이즈가 왜 실제 스케줄러처럼안되는지 확인*/}
        {hoursArray.map((hour, index) => (
          <div
            style={{
              backgroundColor: "red",
              width: index === 0 ? "300px" : "300px",
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
