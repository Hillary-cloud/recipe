import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex justify-center gap-2 py-4">
      <div className="rounded-full h-24 w-24 p-4 bg-black text-white">
        <NavLink to={"/cuisine/Italian"}>
          <FaPizzaSlice className="mt-2 mx-auto" />
          <h4 className="text-center">Italian</h4>
        </NavLink>
      </div>
      <div className="rounded-full h-24 w-24 p-4 bg-black text-white">
        <NavLink to={"/cuisine/American"}>
          <FaHamburger className="mt-2 mx-auto" />
          <h4 className="text-center">American</h4>
        </NavLink>
      </div>
      <div className="rounded-full h-24 w-24 p-4  bg-black text-white">
        <NavLink to={"/cuisine/Thai"}>
          <GiNoodles className="mt-2 mx-auto" />
          <h4 className="text-center">Thai</h4>
        </NavLink>
      </div>
      <div className="rounded-full h-24 w-24 p-4 bg-black text-white">
        <NavLink to={"/cuisine/Japanese"}>
          <GiChopsticks className="mt-2 mx-auto" />
          <h4 className="text-center">Japanese</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default Category;
