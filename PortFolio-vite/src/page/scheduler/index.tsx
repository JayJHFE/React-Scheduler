import Calendar from "../../components/scheduler/calendar";
import * as S from "../../css/mainStyle";
import jsonData from "../../../public/test.json";

export default function Scheduler() {
  const data = jsonData.vehiclces;
  console.log(data);
  console.log(typeof data);
  return (
    <>
      <S.Container>
        <S.innerContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "red",
            }}
          >
            <Calendar />
          </div>
          <div style={{ color: "blue", display: "flex", flexDirection: "row" }}>
            <div
              style={{
                color: "blue",
                display: "flex",
                flexDirection: "row",
                width: "400px",
              }}
            >
              차량
            </div>
            {Array.from({ length: 24 }, (_, i) => (
              <div
                style={{
                  backgroundColor: "red",
                  width: "400px",
                  border: "1px solid black",
                }}
                key={i}
              >
                {i}
              </div>
            ))}
          </div>
          {data &&
            data[0].map((vehicle) => (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div></div>
                <div
                  style={{ backgroundColor: "blue", width: "400px" }}
                  key={vehicle.id}
                >
                  {vehicle.name}
                </div>
                {Array.from({ length: 24 }, (_, i) => (
                  <div
                    style={{
                      backgroundColor: "red",
                      width: "400px",
                      border: "1px solid black",
                    }}
                    key={i}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "60px",
                      }}
                    >
                      {Array.from({ length: 60 }, (_, i) => (
                        <div
                          style={{
                            backgroundColor: "red",
                            width: "1px",
                            border: "1px solid black",
                          }}
                          key={i}
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </S.innerContainer>
      </S.Container>
    </>
  );
}
