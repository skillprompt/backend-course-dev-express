import express, { Request, Response, NextFunction } from "express";

let todos = [
  {
    id: 1,
    name: "learn javascript",
    status: "done",
  },
  {
    id: 2,
    name: "learn reactjs",
    status: "not started",
  },
];

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

function updateTodoController(req: Request, res: Response, next: NextFunction) {
  const data = req.body; // {id: 2, name: "learn reactjs", status: "in progress"}

  const updatedTodos = todos.map((todo) => {
    if (todo.id === data.id) {
      // update
      return {
        id: todo.id,
        name: data.name,
        status: data.status,
      };
    } else {
      return todo;
    }
  });

  todos = updatedTodos;

  console.log("updatedTodos", todos);

  res.json({
    message: "todos updated successfully!",
  });
}

app.put("/todos/update", updateTodoController);

app.listen(4000, () => {
  console.log("Started server on http://localhost:4000");
});
