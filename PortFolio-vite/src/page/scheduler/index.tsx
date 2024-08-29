import Calendar from "../../components/scheduler/calendar";
import * as C from "../../css/mainStyle";
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
            <C.schedulerLeftTableContainer>
              <SchedulerLeftTable />
            </C.schedulerLeftTableContainer>
            <C.schedulerTableContainer>
              <SchedulerTable />
            </C.schedulerTableContainer>
          </C.schedulerContainer>
        </C.innerContainer>
        <C.leftContainer>1</C.leftContainer>
      </C.Container>
    </>
  );
}
