import express from "express";
import path from "path";
import { createServer } from "http";

const app = express();
const http = createServer(app);

// 8080번 포트에서 서버를 실행할거야
http.listen(8080, () => {
  console.log("Listening on 8080");
});
