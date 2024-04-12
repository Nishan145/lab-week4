import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;

const db = new Database("database.db");

//Get root route
app.get("/", function (request, response) {
  const messages = db.prepare("SELECT * FROM messages").all();
  response.json(messages);
});

// POST for submitting message
app.post("/message", function (request, response) {
  const { username, message } = request.body;

  const insertStatement = db.prepare(
    "INSERT INTO messages(username,message)VALUES (?,?),(?,?)"
  );
  insertStatement.run(username, message);
  response.send("message submit successful");
});

//listen
app.listen(PORT, function () {
  console.log("Server is listening to 8080...");
});
