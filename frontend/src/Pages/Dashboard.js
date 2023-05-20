import React, {useContext} from "react";
import { LoginContext } from "../Contexts/LoginContext";

// import AnimatedRoutes from "../components/AnimatedRoutes";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
function Dashboard(props) {
  const {userData} = useContext(LoginContext);

  console.log("Userdata=> in dashboard",userData);
  let user = userData[0]
  return (
    <div className=" ">
      <div className="flex">

        <Sidebar />
        <Overview data={user} />
        {/* <AnimatedRoutes /> */}
      </div>
    </div>
  );
}

export default Dashboard;
