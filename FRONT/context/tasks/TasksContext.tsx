import { createContext } from "react";
import { Task } from "../../interfaces";

interface ContextProps {
  tasks: Task[];

  // Methods
  addNewTask: (title: string, description: string) => void;
  updateTask: (task: Task, showSnackbar?: boolean) => void;
}

export const TasksContext = createContext({} as ContextProps);
