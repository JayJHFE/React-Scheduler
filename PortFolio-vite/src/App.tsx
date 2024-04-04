// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import * as S from "./css/mainStyle.ts";
import Main from "./page/main/index.tsx";
import Scheduler from "./page/scheduler/index.tsx";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <S.container>아래의 메뉴 중 선택해 주세요</S.container>
      {/* div 클릭시 아래 설정대로 이동 */}
      {/* <S.menuContainer>
        <S.menuItem to="/">메인</S.menuItem>
        <S.menuItem to="/scheduler">스케줄러</S.menuItem> */}
      <S.innerContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/scheduler" element={<Scheduler />} />
        </Routes>
      </S.innerContainer>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
