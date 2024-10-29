import styled from "styled-components";

export const Body = styled.div``;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export const innerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d6ccc2;
`;
export const calendarContainer = styled.div`
  display: "flex";
  flex-direction: "row";
`;
export const schedulerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 82vw;
  min-width: 1350px;
  border: 1px solid #de872d;
  overflow-x: auto; /* 스크롤을 schedulerContainer에 적용 */
  position: relative;
  margin-left: 50px;
  margin-top: 20px;
  box-shadow: 4px 0px 14px;
  border-radius: 15px;
  height: 70vh;
`;
export const schedulerLeftTableContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9990;
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
  padding: 30px 20px 30px 20px;
  background-color: #d6ccc2;
`;
