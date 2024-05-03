import express from "express";
import path from "path";
import { createServer } from "http";

const app = express();
const http = createServer(app);
const port = 8080;

// 8080번 포트에서 서버를 실행할거야
// http.listen(8080, () => {
//   console.log("Hello world");
// });
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
