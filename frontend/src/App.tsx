import { Routes, Route, Navigate } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./assets/theme";

import Landing from "./pages/landing";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
