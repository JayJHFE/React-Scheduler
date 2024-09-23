import styled from "styled-components";

export const Body = styled.div``;
export const Container = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
`;
export const innerContainer = styled.div`
  width: 1500px;
  height: 900px;
`;
export const calendarContainer = styled.div`
  display: "flex";
  flex-direction: "row";
`;
export const schedulerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  overflow-x: auto; /* 스크롤을 schedulerContainer에 적용 */
  position: relative;
`;
export const schedulerLeftTableContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
  width: 180px;
  flex-shrink: 0;
`;
export const schedulerTableContainer = styled.div`
  flex-grow: 1;
  position: relative;
  overflow: visible;
`;
export const rightContainer = styled.div`
  width: calc(100% - 1500px);
  height: 900px;
`;
