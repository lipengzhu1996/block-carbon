import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./assets/theme";
import background from "./assets/images/homepage-background.jpg";

import useUser from "./hooks/useUser";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Projects from "./pages/projects";
import Project from "./pages/project";
import Dashboard from "./pages/dashboard";

const PrivateRoute = () => {
  const user = useUser();
  return !user ? <Navigate to="/login" /> : <Outlet />;
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <CssBaseline />
        <Navigation />
        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
