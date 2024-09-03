function RightUpperContainer() {
  return (
    <div
      className="right-upper-container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "300px",
        backgroundColor: "blue",
        alignItems: "center",
      }}
    >
      <div className="right-upper-container__title">할일목록</div>
      <input
        className="right-upper-container__input"
        style={{ width: "200px" }}
      />
      <button className="right-upper-container__button"></button>
    </div>
  );
}
export default RightUpperContainer;
