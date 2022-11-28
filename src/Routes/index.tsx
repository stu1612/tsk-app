// npm
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Collections from "../pages/Collections";
import Tasks from "../pages/Tasks";
import ResetPassword from "../pages/Tasks";

// UI
import { useAuthContext } from "../hooks/useAuthContext";
// import Navbar from "./features/UI/Navbar";

export default function AppRoutes() {
  const { user, authIsReady } = useAuthContext();

  return (
    <Router>
      {authIsReady && (
        <>
          {!user ? (
            <>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reset_password" element={<ResetPassword />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </>
          ) : (
            <>
              {/* <Navbar /> */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/tasks/:title" element={<Tasks />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </>
          )}
        </>
      )}
    </Router>
  );
}
