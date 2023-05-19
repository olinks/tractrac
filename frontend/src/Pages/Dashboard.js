import React, {useContext} from "react";
import { LoginContext } from "../Contexts/LoginContext";

// import AnimatedRoutes from "../components/AnimatedRoutes";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
function Dashboard() {
  const {userData} = useContext(LoginContext);
  return (
    <div className=" ">
      <div className="flex">
        <Sidebar />
        <Overview />
        {/* <AnimatedRoutes /> */}
      </div>
    </div>
  );
}

export default Dashboard;
