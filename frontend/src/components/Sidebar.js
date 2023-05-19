import React, { useState } from "react";

// Importing icons
import logo from "../assets/logo.png";
import logoonly from "../assets/logoonly.png";
import expandarrow from "../assets/expand arrow.png";
import overview from "../assets/overview.png";
import appointments from "../assets/appointments.png";
import doctors from "../assets/doctors.png";
import pathology from "../assets/pathology.png";
import chats from "../assets/chats.png";
import settings from "../assets/settings.png";
import logout from "../assets/logout.png";
import telephone from "../assets/telephone.png";

import { Link } from "react-router-dom";

    function Sidebar() {
      const menus = [
        { name: "Overview", link: "/", icon: overview },
        { name: "Appointments", link: "/products", icon: appointments},
        { name: "Doctors", link: "/curier-deliveries", icon: doctors },
        { name: "Pathology Results", link: "/update-users", icon: pathology},
        { name: "Chats", link: "edit-farm", icon: chats },
        { name: "Setting", link: "/", icon: settings },
        { name: "Logout", link: "/", icon: logout },
      ];
      const [open, setOpen] = useState(true);
      return (
        <section className="rounded-md m-2  ">
        <div
          className={`divide-y divide-gray-700 relative rounded-md bg-[#F7F7F7] min-h-screen px-5  ${
            open ? "w-60" : "w-16"
          } duration-100 text-[primary_text]`}
        >
          {/* Logos and expand Button */}
          <div className="py-3 flex ">
            {/* <HiMenuAlt3
              size={26}
              className="cursor-pointer mb-3"
              onClick={() => setOpen(!open)}
            /> */}
            <div className="">
              {open ? (
              <img
                src={logo}
                className=""
                >

                </img>
              ) :
              (
                <img
                src={logoonly}
                className=""
                >
                </img>
              )}
            </div>
            <div className={` ${ open ? "flex-end ml-5 pl-5 center" : "center"}`}>
              <img
                src={expandarrow}
                className={`cursor-pointer ${!open && "hidden"}`}
                onClick={() => setOpen(!open)}
                >
              </img>
            </div> 
          </div>
          {/* Menu items */}
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } ${open ?"group flex items-center text-sm gap-4 font-medium p-2 hover:bg-gray-300 rounded-md" : "flex items-center gap-3.5 p-2 hover:bg-gray-300 rounded-md"}`}
              >
                <div>
                  <img
                    src={menu.icon}
                    className={`${!open && "scale-250"}`}
                  ></img>
                </div>
                <h2
                  style={{
                    transitionDelay: `100ms`,
                  }}
                  className={` ${
                    !open && "hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {/* {menu?.name} */}
                </h2>
              </Link>
            ))}
          </div>
          {/* Telephone icon */}
          <div className="py-2 px-5 flex flex-row absolute inset-x-0 bottom-12">
            <div className="mr-1">
              <img src={telephone}
              className="">

              </img>
            </div>
            <div className="">
              <h4 className="text-[#F80D38] italic font-bold">Emergency Hotlines</h4>
              <p className="text-[8px]">+234 92 928 2891  +234 60 621 2098</p>
            </div>
          </div>
        </div>
       
      </section>
      );
    }
 

export default Sidebar;
