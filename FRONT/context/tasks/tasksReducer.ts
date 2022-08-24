import { TasksState } from ".";
import { Task } from "../../interfaces";

type TasksActionType =
  | { type: "[Task] Add-Task"; payload: Task }
  | { type: "[Task] Task-Updated"; payload: Task }
  | { type: "[Task] Refresh-Data"; payload: Task[] };

export const tasksReducer = (
  state: TasksState,
  action: TasksActionType
): TasksState => {
  switch (action.type) {
    case "[Task] Add-Task":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "[Task] Task-Updated":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.status = action.payload.status;
            task.description = action.payload.description;
          }
          return task;
        }),
      };

    case "[Task] Refresh-Data":
      return {
        ...state,
        tasks: [...action.payload],
      };

    default:
      return state;
  }
};
