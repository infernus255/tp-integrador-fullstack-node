import type { NextPage } from "next";
import { Card, CardHeader, Grid } from "@mui/material";

import { Layout } from "../components/layouts";
import { TaskList, NewTask } from "../components/ui";

const HomePage: NextPage = () => {
  // console.log(process.env.NEXT_PUBLIC_CLIENT_KEY);
  // console.log(process.env.SECRET_KEY);

  return (
    <Layout title="Home - Task Management">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="Pendientes" />

            {/* Agregar una nueva entrada */}
            {/* Listado de las entradas */}
            <NewTask />
            <TaskList status="pending" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="En Progreso" />
            <TaskList status="in_progress" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="Completadas" />
            <TaskList status="finished" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
