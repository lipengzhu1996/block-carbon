import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./assets/theme";

import useUser from "./hooks/useUser";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import ProjectList from "./pages/project/ProjectList";
import ProjectView from "./pages/project/ProjectView";
import ProjectCreate from "./pages/project/ProjectCreate";
import ProjectEdit from "./pages/project/ProjectEdit";

const PrivateRoute = () => {
  const user = useUser();
  return !user ? <Navigate to="/login" /> : <Outlet />;
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: "black",
        }}
      >
        <CssBaseline />
        <Navigation />
        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/project/:id" element={<ProjectView />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="" element={<Dashboard />} />
            <Route path="create" element={<ProjectCreate />} />
            <Route path="edit" element={<ProjectEdit />} />
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
