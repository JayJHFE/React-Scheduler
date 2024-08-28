import Calendar from "../../components/scheduler/calendar";
import * as C from "../../css/mainStyle";
import jsonData from "../../../public/test.json";
import SchedulerTable from "../../components/scheduler/table";
import SchedulerLeftTable from "../../components/scheduler/leftTable";

export default function Scheduler() {
  const data = jsonData.vehiclces;
  const hoursArray = Array.from({ length: 24 }, (_, i) =>
    i === 0 ? "차량" : i
  );
  return (
    <>
      <C.Container>
        <C.innerContainer>
          <C.calendarContainer>
            <Calendar />
          </C.calendarContainer>
          <C.schedulerContainer>
            <C.SchedulerLeftTableContainer>
              <SchedulerLeftTable />
            </C.SchedulerLeftTableContainer>
            <C.SchedulerTableContainer>
              <SchedulerTable />
            </C.SchedulerTableContainer>
          </C.schedulerContainer>
          {/* <div>
            <div
              style={{ color: "blue", display: "flex", flexDirection: "row" }}
            >
              {hoursArray.map((hour, index) => (
                <div
                  style={{
                    backgroundColor: "red",
                    width: index === 0 ? "600px" : "400px",
                    border: "1px solid black",
                  }}
                  key={index}
                >
                  {hour}
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: "black" }}>
              {data &&
                data[0].map((vehicle) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: "yellow",
                    }}
                  >
                    <div></div>
                    <div
                      style={{ backgroundColor: "blue", width: "600px" }}
                      key={vehicle.id}
                    >
                      {vehicle.name}
                    </div>
                    <div style={{ display: "flex" }}>
                      {Array.from({ length: 24 }, (_, i) => (
                        <div
                          key={i}
                          style={{
                            backgroundColor: "red",
                            width: "400px",
                            border: "1px solid black",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            {Array.from({ length: 60 }, (_, j) => (
                              <div
                                key={j}
                                style={{
                                  backgroundColor: "red",
                                  width: "1px",
                                  height: "20px", // 높이를 적절히 설정
                                  border: "1px solid black",
                                }}
                              >
                                {j}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div> */}
        </C.innerContainer>
      </C.Container>
    </>
  );
}
