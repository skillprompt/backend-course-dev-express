import { Request, Response, NextFunction } from "express";
import { todos } from "../data/todo";

export function updateTodoController(
  req: Request,
  res: Response,
  next: NextFunction
) {
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

  // @ts-ignore
  todos = updatedTodos;

  res.json({
    message: "todos updated successfully!",
  });
}
