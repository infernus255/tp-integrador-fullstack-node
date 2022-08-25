import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";

import { UIProvider } from "../context/ui";
import { TasksProvider } from "../context/tasks";
import { AuthContext, useAuth } from "../context/AuthContext";

import { lightTheme, darkTheme } from "../themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [auth, setAuth] = useState(Cookies.get("access_token") as string);

  useEffect(() => {
    const token = Cookies.get("access_token");
    setAuth(token as string);
    //falta metodo para validar que el token sea valido
    if (!auth) {
      router.push(`/login`);
    }
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      <SnackbarProvider maxSnack={3}>
        <TasksProvider>
          <UIProvider>
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </UIProvider>
        </TasksProvider>
      </SnackbarProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;
