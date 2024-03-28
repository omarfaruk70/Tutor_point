import Navbar from './Components/Navbar';
import logo from '/logo.png';
import { FaCode } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center md:gap-12 md:px-10  shadow-sm">
          {/* Page content here */}
          <div className='flex justify-between md:gap-10 items-center'>
          <img className='w-28 h-12 md:w-52 md:h-28' src={logo} alt="Brand Logo" />
          <label htmlFor="my-drawer" className="cursor-pointer bg-slate-400 p-2 rounded-lg text-white outline-none">
          <FaCode className=' md:text-3xl' />
          </label>
          </div>
          <div className='w-full ml-5 md:ml-14'>
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
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
