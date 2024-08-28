import styled from "styled-components";

export const Body = styled.div``;
export const Container = styled.div`
  width: 1920px;
  height: 1080px;
  background-color: green;
`;
export const innerContainer = styled.div`
  width: 1500px;
  background-color: yellow;
  height: 900px;
`;
export const calendarContainer = styled.div`
  display: "flex";
  flex-direction: "row";
`;
export const schedulerContainer = styled.div`
  background-color: blue;
  width: 100%;
  overflow: auto;
  display: flex;
  position: relative;
`;
export const SchedulerLeftTableContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
  width: 180px;
  flex-shrink: 0;
`;
export const SchedulerTableContainer = styled.div`
  overflow-x: auto;
  flex-grow: 1;
  position: relative;
`;
