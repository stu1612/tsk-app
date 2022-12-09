// npm
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// pages
import Collections from "../pages/Collections";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Icons from "../pages/Icons";
import LearnMore from "../pages/LearnMore";
import Login from "../pages/Login";
import MobileAddTask from "../pages/MobileAddTask";
import ResetPassword from "../pages/ResetPassword";
import Signup from "../pages/Signup";
import Tasks from "../pages/Tasks";
import User from "../pages/User";

// UI
import { useAuthContext } from "../hooks/useAuthContext";

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
                <Route path="/learn_more" element={<LearnMore />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </>
          ) : (
            <>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/tasks/:title" element={<Tasks />} />
                <Route path="/tasks/add_task" element={<MobileAddTask />} />
                <Route path="/icons" element={<Icons />} />
                <Route path="/user" element={<User />} />
                <Route path="/reset_password" element={<ResetPassword />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </>
          )}
        </>
      )}
    </Router>
  );
}
