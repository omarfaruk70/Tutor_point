import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import logo from "/logo.png";
import { FaCode, FaRegUserCircle } from "react-icons/fa";
import { IoHomeOutline, IoCalendarClearOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import Statistics from "./Components/Statistics";
import Sessions from "./Components/Sessions";
import Survey from "./Components/Survey";

function App() {
  const li = (
    <>
      <li className="hover:border-b-2 py-3 px-4 rounded-sm transition-all border-yellow-500">
        <Link to={"/"}>
          <IoHomeOutline className="text-xl md:text-3xl md:font-semibold" />{" "}
          Home
        </Link>
      </li>
      <li className="hover:border-b-2 py-3 px-4 rounded-sm transition-all border-yellow-500">
        <Link to={"/"}>
          <IoCalendarClearOutline className="text-xl md:text-3xl md:font-semibold" />{" "}
          Schedule
        </Link>
      </li>
      <li className="hover:border-b-2 py-3 px-4 rounded-sm transition-all border-yellow-500">
        <Link to={"/messages"}>
          <AiOutlineMessage className="text-xl md:text-3xl md:font-semibold" />
          Messages
          <h2 className="text-6xl -mt-9 font-bold text-yellow-500">.</h2>
        </Link>
      </li>
      <li className="hover:border-b-2 py-3 px-4 rounded-sm transition-all border-yellow-500">
        <Link to={"/"}>
          <FaRegUserCircle className="text-xl md:text-3xl md:font-semibold" />{" "}
          Students
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="drawer z-100">
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
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 md:w-60 min-h-full bg-slate-700 z-1 text-white">
            {li}
          </ul>
        </div>
      </div>
      <div className="px-14 bg-slate-100 space-y-40 md:space-y-32">
        <Statistics></Statistics>
        <Sessions></Sessions>
        <Survey></Survey>
      </div>
    </>
  );
}

export default App;
