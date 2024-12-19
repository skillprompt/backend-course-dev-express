import express, { Request, Response, NextFunction } from "express";
import { updateTodoController } from "./controllers/update-todo-controller";
import { todos } from "./data/todo";

const app = express();

// parser json
app.use(express.json());

app.get("/", (req, res) => {
  res.write("hello world from express app!");
  res.end();
});
// -> request
app.post(
  "/todos/create",
  (req, res, next) => {
    console.log("the request comes here 1");

    const currentTimeInMs = Date.now(); // unix - 1970-01-01

    if (currentTimeInMs < new Date("2024-12-18").getTime()) {
      next();
    } else {
      res.json({
        message: "you cannot send request today.",
      });
    }
  },
  (req, res, next) => {
    console.log("the request comes here 2");
    next();
  },
  (req, res) => {
    console.log("request comes here create the todos 3");

    const data = req.body;

    console.log("body received", data); // { name: 'expressjs tutorial', status: 'in progress' }

    todos.push({
      id: todos.length + 1,
      name: data.name,
      status: data.status,
    });

    res.json({
      message: "Todos created!",
    }); // -> response
  }
);

app.put("/todos/update", updateTodoController);

app.listen(4000, () => {
  console.log("Started server on http://localhost:4000");
});
