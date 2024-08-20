function SchedulerTable() {
  //25개의 시간을 만들어서 차량을 넣어준다.

  const hoursArray = Array.from({ length: 25 }, (_, i) => i);
  const data = 5;
  return (
    <>
      <div style={{ position: "relative" }}>
        {/* 세로로 위에 덮는 div 를 data의 길이만큼 생성 */}
        {/* div를 absolute로 설정하여 겹치게 만든다. */}
        {Array.from({ length: data }, (_, i) => (
          <div
            key={i}
            style={{
              zIndex: 100,
              width: "180px",
              height: "30px",
              backgroundColor: "blue",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: `${i * 30}px`, // 각 div가 서로 다른 위치에 놓이도록 조정
            }}
          >
            1
          </div>
        ))}
        {/* div 를 data의 길이만큼 생성 */}
        {Array.from({ length: data }, (_, i) => (
          <div
            key={i}
            style={{
              width: "4500px",
              color: "blue",
              display: "flex",
              flexDirection: "row",
            }}
          >
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
        ))}
      </div>
    </>
  );
}
export default SchedulerTable;
