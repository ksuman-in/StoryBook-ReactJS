/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../style-guide/Theme";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import App from "../App";
import Typography from "../components/styles/Typography";
import { Welcome } from "@storybook/react/demo";

storiesOf("Welcome|Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Basic|Typography", module).add("all", () => (
  <ThemeProvider theme={theme}>
    <Typography theme={theme} />
  </ThemeProvider>
));

storiesOf("App", module).add("Default", () => <App />);
storiesOf("App", module).add("My world", () => <App title="My World" />);
