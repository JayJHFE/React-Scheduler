function SchedulerTable() {
  const hoursArray = Array.from({ length: 24 }, (_, i) =>
    i === 0 ? "차량" : i
  );
  return (
    <>
      <div style={{ color: "blue", display: "flex", flexDirection: "row" }}>
        {hoursArray.map((hour, index) => (
          <div
            style={{
              backgroundColor: "red",
              width: index === 0 ? "600px" : "fix-content",
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
