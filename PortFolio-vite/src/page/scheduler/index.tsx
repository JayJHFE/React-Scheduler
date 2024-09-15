import Calendar from "../../components/scheduler/calendar";
import * as C from "../../css/mainStyle";
import SchedulerTable from "../../components/scheduler/table";
import SchedulerLeftTable from "../../components/scheduler/leftTable";
import RightUpperContainer from "../../components/scheduler/right/rightUpperContainer";
import RightLowerContainer from "../../components/scheduler/right/rightLowerContainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ScheduleModal from "../../components/scheduler/modal/ScheduleModal";

export default function Scheduler() {
  return (
    <>
      <C.Container>
        <DndProvider backend={HTML5Backend}>
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
            <RightLowerContainer />
          </C.rightContainer>
        </DndProvider>
      </C.Container>
      <ScheduleModal />
    </>
  );
}
