import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const port: number = 3000;
const Dataset = [
  {
    id: "1",
    name: "Daniel Okwudili",
    stack: "Half Stack",
  },
  {
    id: "2",
    name: "Jemima Udoka",
    stack: "Entry Level",
  },
  {
    id: "3",
    name: "Sean Etang",
    stack: "Full Stack`",
  },
];

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // res.writeHead(200);

    if (req.url === "/" && req.method === "GET" && res.statusCode === 200) {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(Dataset));
      res.end();
    } 
});

server.listen(port, () => {
  console.log("Running");
});