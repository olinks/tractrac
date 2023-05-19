import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/login";
function App() {
  return (
    <div>
      <Router>
        {/* <Dashboard /> */}
        <Login />
      </Router>
    </div>
  );
}

export default App;
