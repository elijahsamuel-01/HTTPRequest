import http, {IncomingMessage, ServerResponse} from "http"

const PORT:number = 9991;

interface iData {
  id: number;
  name: string;
  phone:  number;
  stack:  string;
}

interface iMessage {
  message:  string;
  success:  boolean;
  data: null | {}[] | {};
}

const set08:  iData[] =  [
  {
    id: 1,
    name: "Samuel",
    phone:  80138370064,
    stack:  "Full-Stack",
  },
  {
    id: 2,
    name: "Zion",
    phone:  70900423122,
    stack:  "Full-Stack",
  },
  {
    id: 3,
    name: "Tobi",
    phone:  80550997123,
    stack:  "Full-Stack",
  },
  {
    id: 4,
    name: "Ekene",
    phone:  80138370162,
    stack:  "Full-Stack",
  },
  {
    id: 5,
    name: "Ahmad",
    phone:  91134301162,
    stack:  "Full-Stack",
  }
]

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.setHeader("Content-Type", "Application/Json");
    const { method, url } = req;
    let status: number = 404;

    let response: iMessage = {
      message: "failed",
      success: false,
      data: null,
    };
    const container: any = [];
    req
      .on("data", (chunk: any) => {
        container.push(chunk);
      })
      .on("end", () => {
        //Get method
        if (url === "/" && method === "GET") {
          status = 200;
          response.message = "All set08 data gotten";
          response.success = true;
          response.data = set08;
          res.write(JSON.stringify({ response, status }));
          res.end();
        }

        //post method
        if (url === "/" && method === "POST") {
          status = 201;
          const body = JSON.parse(container);
          set08.push(body);
          response.message = "SUCCESSFULLY added";
          response.success = true;
          response.data = set08;
          res.write(JSON.stringify({ response, status }));

          res.end();
        }

        //patch method
        //put method
      });
  }
);

server.listen(PORT,()=>{
  console.log("Server is up and running")
});