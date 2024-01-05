import React, { useState } from "react";
import { FaBars, FaBook, FaWindows, FaTimes, FaSearch, FaUserAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="max-w-scree-2xl mb-12 md:px-12 xl:px-28 h-[80px] bg-white-500 shadow-lg">
      <div className="flex justify-between">
        
        <h2 className="text-3xl font-bold mt-4 ml-4">
        <NavLink to="/">Yummy<span className="text-orange-700">Foods</span></NavLink>
          
        </h2>
        <form onSubmit={submitHandler}>
        <div className="hidden lg:flex w-[250px] rounded-3xl h-10 md:w-[400px] mt-4 bg-gray-200">
        
            <FaSearch className="my-[0.6rem] mx-2" size={25} />
          <input
            type="text"
            className="bg-transparent focus:outline-none"
            onChange={(e) => setInput(e.target.value)}
            placeholder="search..."
            value={input}
          />
           
        </div>
        </form>

        <ul className="hidden md:flex justify-between gap-4 mt-4">
          <li><NavLink className="hover:text-orange-700" to="/">Home</NavLink></li>
          <li><NavLink className="hover:text-orange-700" to="/">About</NavLink></li>
          <li><NavLink className="hover:text-orange-700" to="/">Contact</NavLink></li>
        </ul>

        {showMenu ? (
          <div className="bg-black/60 h-screen w-full mt-0 right-0 fixed cursor-pointer md:hidden"></div>
        ) : (
          ""
        )}
        {showMenu ? (
          <div className="bg-white w-[300px] h-screen top-0 z-10 cursor-pointer p-4 md:hidden">
            <div className="flex justify-between mb-8">
              <h2 className="text-3xl font-bold">
                Yummy<span className="text-orange-700">Foods</span>
              </h2>
              <FaTimes size={25} onClick={toggleMenu} />
            </div>

            <form onSubmit={submitHandler}>
            <div className="flex flex-col">
              <div className="flex w-[250px] rounded-3xl h-10 my-3 mx-auto bg-gray-200">
                <FaSearch className="my-[0.6rem] mx-2" size={25} />
                <input
                  type="text"
                  className="bg-transparent focus:outline-none"
                  placeholder="search..."
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
              </div>
              </div>
              </form>
              <div className="flex gap-4 my-2">
                <FaWindows size={25} />
                <NavLink to="/">Home</NavLink>
              </div>
              <div className="flex gap-4 my-2">
                <FaBook size={25} />
                <NavLink to="/">About</NavLink>
              </div>
              <div className="flex gap-4 my-2">
                <FaUserAlt size={25} />
                <NavLink to="/">Contact</NavLink>
              </div>
            </div>
          
        ) : (
          <FaBars
            size={25}
            onClick={toggleMenu}
            className="mt-4 mr-4 cursor-pointer md:hidden"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
