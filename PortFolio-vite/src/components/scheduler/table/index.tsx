function SchedulerTable() {
  const hoursArray = Array.from({ length: 25 }, (_, i) => i);
  const data = 6;

  return (
    <>
      <div style={{ position: "relative" }}>
        {/* div를 data의 길이만큼 생성 */}
        {/* 첫번째 div만 다른 이름을 가진 div로 생성 */}
        {Array.from({ length: data }, (_, i) => (
          // i == 0 ? () : ()
          <div
            key={i}
            style={{
              width: "4500px",
              color: "blue",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {hoursArray.map((index) => (
              // i == 0 ? () : ()
              <div
                key={index}
                style={{
                  backgroundColor: "red",
                  width: "180px",
                  height: "30px",
                  border: "1px solid black",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {Array.from({ length: 60 }, (_, minuteIndex) => (
                  <div
                    key={minuteIndex}
                    style={{
                      backgroundColor: "yellow",
                      width: "3px",
                      height: "100%",
                      borderRight: "1px solid black",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
export default SchedulerTable;
