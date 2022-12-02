/**
=========================================================
* Material Kit 2 React React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Material Kit 2 React base styles
import colors from "./base/colors";
import typography from "./base/typography";
import globals from "./base/globals";

import flatpickr from "./components/flatpickr";
import container from "./components/container";

export default createTheme({
  palette: { ...colors },
  typography: { ...typography },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...flatpickr,
        ...container,
      },
    },
  },
});
