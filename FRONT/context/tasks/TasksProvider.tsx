import { FC, useEffect, useReducer } from "react";

import { useSnackbar } from "notistack";

import { apiConfig } from "../../api";
import { Task } from "../../interfaces";
import { TasksContext, tasksReducer } from ".";

const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBlcGVBQkNEIiwiaWF0IjoxNjYxMzgxMDI1LCJleHAiOjE2NjEzODQ2MjV9.QgSf8l2_ItwDCpvinj90A4YkO37NcoB04Up7wX1Rhn4";
const config = {
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
};

export interface TasksState {
  tasks: Task[];
}

const Tasks_INITIAL_STATE: TasksState = {
  tasks: [],
};

interface Props {
  children: React.ReactNode;
}

export const TasksProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, Tasks_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  const addNewTask = async (title: string, description: string) => {
    const { data } = await apiConfig.post<Task>(
      "/tasks",
      { title, description },
      config
    );
    dispatch({ type: "[Task] Add-Task", payload: data });
  };

  const updateTask = async (
    { id, title, description, status }: Task,
    showSnackbar = false
  ) => {
    try {
      const { data } = await apiConfig.put<Task>(
        `/tasks/${id}`,
        { title, description, status },
        config
      );
      dispatch({ type: "[Task] Task-Updated", payload: data });

      if (showSnackbar)
        enqueueSnackbar("Entrada actualizada", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
    } catch (error) {
      console.log({ error });
    }
  };

  const refreshTasks = async () => {
    const { data } = await apiConfig.get<Task[]>("/tasks", config);
    dispatch({ type: "[Task] Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        ...state,

        // Methods
        addNewTask,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
