// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import * as S from "./css/mainStyle.ts";
import Scheduler from "./page/scheduler.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <S.container>아래의 메뉴 중 선택해 주세요</S.container>
      <S.innerContainer>
        <S.innerLeftContainer>리액트 + 바이트 기본페이지</S.innerLeftContainer>
        {/* 아래 링크태그로 이동 */}
        <S.innerRightContainer>
          <Scheduler />
        </S.innerRightContainer>
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
