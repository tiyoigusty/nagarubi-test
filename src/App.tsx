import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login-page";
import Register from "./pages/register-page";
import Dashboard from "./pages/dashboard-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
