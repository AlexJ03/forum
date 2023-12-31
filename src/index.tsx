import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@global-css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const container = document.getElementById( "root" )!;
const root = createRoot( container );

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);