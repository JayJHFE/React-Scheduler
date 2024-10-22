import "./App.css";
// import Home from "./page/home/index.tsx";
import Main from "./page/main/index.tsx";
import Scheduler from "./page/scheduler/index.tsx";
// import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/scheduler" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/scheduler" element={<Scheduler />} />
      </Routes>
      {/* <Link to="/">홈으로 이동</Link> */}
    </div>
  );
}

export default App;
