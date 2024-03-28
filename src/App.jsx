import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import logo from "/logo.png";
import { FaCode, FaRegUserCircle } from "react-icons/fa";
import { IoHomeOutline, IoCalendarClearOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";



function App() {
  const li = (
    <>
      <li className="hover:border-b-2 py-3 px-4 rounded-sm transition-all border-yellow-500">
        <Link to={"/"}> <IoHomeOutline className="text-xl md:text-3xl"/> Home</Link>
      </li>
      <li className="hover:border-b-2 py-3 px-4 rounded-sm transition-all border-yellow-500">
        <Link to={"/"}><IoCalendarClearOutline className="text-xl md:text-3xl"/> Schedule</Link>
      </li>
      <li className="hover:border-b-2 py-3 px-4 rounded-sm transition-all border-yellow-500">
        <Link to={"/"}> <AiOutlineMessage className="text-xl md:text-3xl"/> Messages</Link>
      </li>
      <li className="hover:border-b-2 py-3 px-4 rounded-sm transition-all border-yellow-500">
        <Link to={"/"}><FaRegUserCircle className="text-xl md:text-3xl"/> students</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center md:gap-12 md:px-10  shadow-sm">
          {/* Page content here */}
          <div className="flex justify-between md:gap-10 items-center">
            <img
              className="w-28 h-12 md:w-52 md:h-28 cursor-pointer"
              src={logo}
              alt="Brand Logo"
            />
            <label
              htmlFor="my-drawer"
              className="cursor-pointer bg-slate-400 p-2 rounded-lg text-white outline-none"
            >
              <FaCode className=" md:text-3xl" />
            </label>
          </div>
          <div className="w-full ml-5 md:ml-14">
            <Navbar></Navbar>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 md:w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {/* <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li> */}
            {li}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
