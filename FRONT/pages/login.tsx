import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../themes";
import { useState } from "react";
import { signUp, signIn } from "../api";
import { useRouter } from "next/router";

const LoginPage = () => {
  //true is up, false is in
  const [upOrIn, setUpOrIn] = useState(true);

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userName = data.get("userName");
    const password = data.get("password");
    if (upOrIn) {
      signUp(userName as string, password as string).then((data) => {
        if (data) setUpOrIn(false);
      });
    } else {
      signIn(userName as string, password as string).then((data) => {
        if (data) router.push(`/`);
      });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {upOrIn ? "Sign Up" : "Sign In"}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="userName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {upOrIn ? "Sign Up" : "Sign In"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {upOrIn ? (
                  <Button
                    href=""
                    variant="text"
                    onClick={() => setUpOrIn(!upOrIn)}
                  >
                    Ya tenes cuenta? Logueate
                  </Button>
                ) : (
                  <Button
                    href=""
                    variant="text"
                    onClick={() => setUpOrIn(!upOrIn)}
                  >
                    No tenes cuenta? Registrate
                  </Button>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
