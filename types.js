import { object, string } from "zod";

const createTodo = object({
  title: string(),
  description: string(),
});

const updateTodo = object({
  id: string(),
});

export const newCreateTodo = createTodo;
export const updateTodo2 = updateTodo;
