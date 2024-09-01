import Calendar from "../../components/scheduler/calendar";
import * as C from "../../css/mainStyle";
import SchedulerTable from "../../components/scheduler/table";
import SchedulerLeftTable from "../../components/scheduler/leftTable";
import RightUpperContainer from "../../components/scheduler/right/rightUpperContainer";

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
        <C.rightContainer>
          <RightUpperContainer />
        </C.rightContainer>
      </C.Container>
    </>
  );
}
