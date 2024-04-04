import "./App.css";
import * as S from "./css/mainStyle.ts";
import Main from "./page/main/index.tsx";
import Scheduler from "./page/scheduler/index.tsx";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <S.container>아래의 메뉴 중 선택해 주세요</S.container>
      <S.innerContainer>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/scheduler" element={<Scheduler />} />
        </Routes>
        <S.innerLeftContainer>
          <Link to="/main">리액트 + 바이트 기본페이지</Link>
        </S.innerLeftContainer>
        <S.innerRightContainer>
          <Link to="/scheduler">스케줄러 페이지 </Link>
        </S.innerRightContainer>
      </S.innerContainer>
    </>
  );
}

export default App;
