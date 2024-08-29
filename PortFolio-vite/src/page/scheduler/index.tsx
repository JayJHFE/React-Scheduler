import Calendar from "../../components/scheduler/calendar";
import * as C from "../../css/mainStyle";
import jsonData from "../../../public/test.json";
import SchedulerTable from "../../components/scheduler/table";
import SchedulerLeftTable from "../../components/scheduler/leftTable";

export default function Scheduler() {
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
        </C.innerContainer>
      </C.Container>
    </>
  );
}
