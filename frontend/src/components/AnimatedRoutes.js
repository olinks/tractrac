import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import Overview from "./Overview";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div className="w-[100%]">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/dashboard" exact element={<Overview />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;
