import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

//listen
app.listen(8080, function () {
  console.log("Server is listening to 8080...");
});
//app.get root route
app.get("/", function (request, response) {
  response.json({ message: "Hello World!" });
});
