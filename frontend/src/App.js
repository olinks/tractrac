import "./App.css";
import React, {useState} from "react"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

import {LoginContext} from "./Contexts/LoginContext"

function App() {
    const [userData, setUserData] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div>
      <LoginContext.Provider value={{userData, setUserData, isLoggedIn, setIsLoggedIn, isRegistered, setIsRegistered}}>
        {/* <Router> */}



          {isLoggedIn ? (<Dashboard />) : <Login />}




          
          {/* <Routes> */}
            {/* <Route path="/" exact element={<Login />} /> */}
            {/* <Route path="/dashboard" exact element={<Dashboard />} /> */}
          {/* </Routes> */}
        {/* </Router> */}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
