import "./App.css";
import Main from "./page/main/index.tsx";
import Scheduler from "./page/scheduler/index.tsx";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/scheduler" element={<Scheduler />} />
        </Routes>
        <Link to="/main">저를 클릭해 주세요</Link>
      </div>
    </>
  );
}

export default App;
