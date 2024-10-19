import styled from "styled-components";

// export const rowScheduler = styled.div`
//   display: flex;
//   flex-direction: row;
//   white-space: nowrap;
//   padding: 20px 10px 20px 10px;
//   width: 1920px;
//   overflow: auto;
// `;
export const rowScheduler = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  padding: 20px 10px;
  width: fit-content; // 동적으로 내용에 맞게 너비 설정
  overflow: auto;
`;
