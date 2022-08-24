import { DragEvent, FC, useContext } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { UIContext } from "../../context/ui/UIContext";
import { Task } from "../../interfaces";

import { dateFunctions } from "../../utils";

interface Props {
  task: Task;
}

export const TaskCard: FC<Props> = ({ task }) => {
  const { startDragging, endDragging } = useContext(UIContext);
  const router = useRouter();

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("text", task.id);

    startDragging();
  };

  const onDragEnd = () => {
    endDragging();
  };

  const onClick = () => {
    router.push(`/tasks/${task.id}`);
  };

  return (
    <Card
      onClick={onClick}
      sx={{ marginBottom: 1 }}
      // Eventos de drag
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {task.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          {/* <Typography variant="body2">
            {dateFunctions.getFormatDistanceToNow(task.createdAt)}
          </Typography> */}
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
