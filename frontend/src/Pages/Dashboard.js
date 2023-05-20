import React, {useContext, useState} from "react";
import { LoginContext } from "../Contexts/LoginContext";

// import AnimatedRoutes from "../components/AnimatedRoutes";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import {ModeContext} from "../Contexts/ModeContext"

function Dashboard(props) {
  const {userData} = useContext(LoginContext);
  const [darkmode, setDarkMode] = useState(false);

  let user = userData[0]
  return (
    <div className=" ">
      <div className="flex">
        <ModeContext.Provider value={{darkmode, setDarkMode}}>
          <Sidebar />
          <Overview data={user} />
        </ModeContext.Provider>
        {/* <AnimatedRoutes /> */}
      </div>
    </div>
  );
}

export default Dashboard;
