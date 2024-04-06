import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>여긴 홈화면입니다</h1>
      <Link to="/main">리액트 기본페이지로 이동</Link>
      <Link to="/scheduler">스케줄러로 이동</Link>
    </div>
  );
}
export default Home;
