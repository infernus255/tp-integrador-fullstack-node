import { FC, useContext, useMemo, DragEvent } from "react";
import { List, Paper } from "@mui/material";

import { TasksContext } from "../../context/tasks";
import { UIContext } from "../../context/ui";

import { TaskStatus } from "../../interfaces";
import { TaskCard } from ".";

import styles from "./TaskList.module.css";

interface Props {
  status: TaskStatus;
}

export const TaskList: FC<Props> = ({ status }) => {
  const { tasks, updateTask } = useContext(TasksContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const tasksByStatus = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropTask = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");

    const task = tasks.find((e) => e.id === id)!;
    task.status = status;
    updateTask(task);
    endDragging();
  };

  return (
    //   TODO: aquí haremos drop
    <div
      onDrop={onDropTask}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "3px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {tasksByStatus.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
