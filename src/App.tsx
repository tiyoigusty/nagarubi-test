import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./pages/login-page";
import Register from "./pages/register-page";
import Dashboard from "./pages/dashboard-page";

function App() {
  const PrivateRoute = () => {
    const user = localStorage.getItem("user");

    if (user) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
