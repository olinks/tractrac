import React from "react";

import AnimatedRoutes from "../components/AnimatedRoutes";
import Sidebar from "../components/Sidebar";
import Header from "../components/H";
function Dashboard() {
  return (
    <div className=" ">
      <div className="flex">
        <Sidebar />
        <AnimatedRoutes />
      </div>
    </div>
  );
}

export default Dashboard;
