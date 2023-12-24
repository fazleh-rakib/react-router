import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import First from "../First/First";

const Home = () => {
  return (
    <div>
      <Header />
      <First />
      <Outlet />
    </div>
  );
};

export default Home;
