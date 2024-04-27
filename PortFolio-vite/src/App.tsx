import "./App.css";
import Home from "./page/home/index.tsx";
import Main from "./page/main/index.tsx";
import Scheduler from "./page/scheduler/index.tsx";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/scheduler" element={<Scheduler />} />
        </Routes>
        <Link to="/">저를 클릭해 주세요</Link>
      </body>
    </div>
  );
}

export default App;
