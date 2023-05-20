import React,{useState} from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons/lib";

import contrast from "../assets/contrast.png";
import contrastdark from "../assets/contrastdark.png";
import darkoff from "../assets/togglebutton.png";
import darkon from "../assets/switch.png";
import dash from "../assets/component.png";
import darkdash from "../assets/darkcomponent.png";
import Header from "./Header";
function Overview({data}) {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode(){
    setDarkMode(!darkMode);
  }
  return (
    <motion.div className="">
      <IconContext.Provider value={{ color: "black", size: "25px" }}>
        <Header user={data}></Header>
        {/* <header className="h-[55px] sm:h-[70px] w-[100%]  sm:w-[100%] bg-[#f7f7f7] flex justify-center items-center px-2 sm:px-3 md:px-12">
          <h4 className="font-bold text-[#62AB4D] text-md sm:text-lg">
            ORDERS
          </h4>
        </header> */}
        <div className={`my-2 w-[100] relative ${darkMode && "bg-[#050517]"} `}>
          {/* Greeting Div */}
          <div className="flex justify-around">
            <div className={`${darkMode && "text-[#ffff]"}`}>
              <h3>Welcome Vivian,</h3>
              <p>How’re you feeling today?</p>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <img
                  src={darkMode ? contrastdark : contrast}
                  alt="contrast"
                >
                </img>
              </div>
              <div className={`${darkMode && "text-[#ffff]"}`}>
                <img
                  src={darkMode ? darkon : darkoff}
                  alt="toggle Button"
                  onClick={() => toggleDarkMode()}
                >
                </img>
              </div>
              <div className={`${darkMode && "text-[#ffff]"}`}>
                <p>Apply Dark Theme</p>
              </div>
            </div>
          </div>
          {/* Chart Section */}
          <section className="p-5">
            <img src={darkMode ? darkdash : dash} alt="dash"></img>
            <div>
              {/* Left chart Section */}
              <div className="flex flex-col">
                {/* First Row */}
                <div>
                  {/* Diagnostics */}
                  <div></div>
                  {/* Patients */}
                  <div></div>
                  {/* Health Index */}
                  <div></div>
                </div>
                {/* Second Row */}
                <div>
                  {/* Covid Pandemic */}
                  <div></div>
                  {/* Company Growth */}
                  <div></div>
                </div>
                {/* Third Row */}
                <div>
                  {/* Patient Table */}
                  <div></div>
                </div>
              </div>
              {/* Right Section */}
              <div>
                {/* Overall Appointments */}
                <div></div>
                {/* Upcoming Appointments */}
                <div></div>
                {/* Previous Appointments */}
                <div></div>
              </div>
            </div>
          </section>

        </div>
      </IconContext.Provider>
    </motion.div>
  );
}

export default Overview;
