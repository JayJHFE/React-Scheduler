function SchedulerLeftTable() {
  const data = 5;
  return (
    <>
      <div style={{ position: "sticky", top: 0, left: 0, zIndex: 100 }}>
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
              position: "sticky",
              top: `${i * 30}px`,
              left: 0, // 각 div가 서로 다른 위치에 놓이도록 조정
            }}
          >
            1
          </div>
        ))}
      </div>
    </>
  );
}
export default SchedulerLeftTable;
