import React from 'react';
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from 'react-router-dom';


const Category = () => {
  return (
    <div className='flex justify-center gap-2 py-6'>
      <div>
        <NavLink to={"/cuisine/Italian"}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </NavLink>
      </div>
      <div>
        <FaHamburger />
        <h4>American</h4>
      </div>
      <div>
        <GiNoodles />
        <h4>Thai</h4>
      </div>
      <div>
        <GiChopsticks />
        <h4>Japanese</h4>
      </div>
    </div>
  )
}

export default Category
