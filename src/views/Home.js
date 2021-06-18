import React from "react";
import aoe from "../assets/aoe.png";

const Home = () => {
  console.log("aoe", aoe);
  return (
    <div>
      <img src={aoe} alt={aoe} />
    </div>
  );
};

export default Home;
