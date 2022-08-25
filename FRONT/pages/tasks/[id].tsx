import { ChangeEvent, FC, useMemo, useState, useContext } from "react";
import { GetServerSideProps } from "next";

import {
  capitalize,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  IconButton,
} from "@mui/material";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { TasksContext } from "../../context/tasks";
import { Layout } from "../../components/layouts";
import { Task, TaskStatus } from "../../interfaces";
import { dateFunctions } from "../../utils";

import { getTaskById } from "../../api";
import Cookies from "js-cookie";
import * as cookie from "cookie";

const validStatus: TaskStatus[] = ["pending", "in_progress", "finished"];

interface Props {
  task: Task;
}

export const TaskPage: FC<Props> = ({ task }) => {
  const { updateTask } = useContext(TasksContext);

  const [inputValue, setInputValue] = useState(task.description);
  const [status, setStatus] = useState<TaskStatus>(task.status);
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as TaskStatus);
  };

  const onSave = () => {
    if (inputValue.trim().length === 0) return;

    const updatedTask: Task = {
      ...task,
      status,
      description: inputValue,
      title: inputValue,
    };

    updateTask(updatedTask, true);
  };

  return (
    <Layout title={inputValue.substring(0, 20) + "..."}>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            {/* <CardHeader
              title={`Entrada:`}
              subheader={`Creada ${dateFunctions.getFormatDistanceToNow(
                task.createdAt
              )}`}
            /> */}

            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueva entrada"
                autoFocus
                multiline
                label="Nueva entrada"
                value={inputValue}
                onBlur={() => setTouched(true)}
                onChange={onInputValueChanged}
                helperText={isNotValid && "Ingrese un valor"}
                error={isNotValid}
              />

              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChanged}>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "error.dark",
        }}
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const { id } = params as { id: string };
  const parsedCookies = cookie.parse(req.headers.cookie as string);
  const task = await getTaskById(id, parsedCookies.access_token);

  if (!task) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      task,
    },
  };
};

export default TaskPage;
