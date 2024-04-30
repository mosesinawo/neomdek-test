import { useState } from "react";
import { BiSolidCoinStack } from "react-icons/bi";
import { FaRegUser, FaUsers } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { GrTag } from "react-icons/gr";
import { IoMdArrowDropdown, IoMdHome } from "react-icons/io";
import { VscSettingsGear } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

function Sidebar() {

  const [subNav, setSubNav] = useState(false)

  return (
    <aside className="w-60 fixed left-0 overflow-y-scroll no-scrollbar  py-7 bg-[#015591] h-screen text-white ">
      <div className="w-36 h-36 mx-auto rounded-full bg-white flex justify-center items-center ">
        <FaRegUser color="gray" size={50} />
      </div>
      <div className="border-b-[3px] border-white w-full pb-10 flex flex-col items-center">
        <div className="mt-4 text-center">
          <h6 className="text-2xl font-medium"> Kemi Tunde</h6>
          <p className="text-base mt-2">Admin</p>
        </div>

        <p className="text-2xl font-medium flex gap-2 items-center mt-10 justify-center">
          {" "}
          <span>
            <IoMdHome />
          </span>{" "}
          Home
        </p>
      </div>

      <nav className="text-[1.1rem] px-2 mt-7">
        <ul className="flex flex-col gap-2">
          <li className="text-white flex items-center gap-2 py-2 cursor-pointer px-1 rounded-md hover:bg-white hover:text-[#015591] transition-all ">
            <span>
              <FaUsers />
            </span>
            <NavLink to="/" className="">
              Business
              <br /> Development
            </NavLink>
            <span className="ml-auto">
              <IoMdArrowDropdown />
            </span>
          </li>

          <li className=" text-white flex items-center gap-2 py-2 cursor-pointer px-1 rounded-md hover:bg-white hover:text-[#015591] transition-all"
          onClick={() => setSubNav(nav => !nav)}>
            <span>
              <GrTag />
            </span>
            <NavLink to="/" className="">
              Reservations
            </NavLink>
            <span className="ml-auto">
              <IoMdArrowDropdown />
            </span>
          </li>
          {subNav &&<> <span className="flex items-center gap-2 text-sm font-light px-1 py-2 cursor-pointer rounded-md hover:bg-white hover:text-[#015591] transition-all">
            <span className="w-1 bg-white h-5 block" />
            <NavLink to="/" className="">
              Bookings
            </NavLink>
          </span>
          <span className="flex items-center gap-2 text-sm font-light px-1 py-2 cursor-pointer rounded-md hover:bg-white hover:text-[#015591] transition-all">
            <span className="w-1 bg-white h-5 block" />
            <NavLink to="/" className="">
              Scheduling
            </NavLink>
          </span> </> }
          <li className=" text-white flex items-center gap-2 py-2 cursor-pointer px-1 rounded-md hover:bg-white hover:text-[#015591] transition-all">
            <span>
            <BiSolidCoinStack />
            </span>
            <NavLink to="/" className="">
              Operations
            </NavLink>
            <span className="ml-auto">
              <IoMdArrowDropdown />
            </span>
          </li>

          <li className=" text-white flex items-center gap-2 py-2 cursor-pointer px-1 rounded-md hover:bg-white hover:text-[#015591] transition-all">
            <span>
            <FaRegFileLines />
            </span>
            <NavLink to="/" className="">
              Infrastrunture
            </NavLink>
            <span className="ml-auto">
              <IoMdArrowDropdown />
            </span>
          </li>

          <li className=" text-white flex items-center gap-2 py-2 cursor-pointer px-1 rounded-md hover:bg-white hover:text-[#015591] transition-all">
            <span>
            <BiSolidCoinStack />
            </span>
            <NavLink to="/" className="">
            Report & Tools
            </NavLink>
            <span className="ml-auto">
              <IoMdArrowDropdown />
            </span>
          </li>

          <li className=" text-white flex items-center gap-2 py-2 cursor-pointer px-1 rounded-md hover:bg-white hover:text-[#015591] transition-all">
            <span>
            <VscSettingsGear />
            </span>
            <NavLink to="/" className="">
              Setup
            </NavLink>
            <span className="ml-auto">
              <IoMdArrowDropdown />
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
