import { IoIosNotificationsOutline } from "react-icons/io";
import profile from '/profile.png';


const Navbar = () => {
    return (
        <div className="flex justify-between w-full items-center">
            <h2 className="md:text-3xl">Hello  <strong>Charlie</strong>👋</h2>
            <div className="flex justify-center items-center md:gap-5">
            <IoIosNotificationsOutline className='text-4xl md:text-5xl' />
            <img src={profile} className="h-10 w-10 md:h-14 md:w-14 rounded-full" alt="User Profile" />
            </div>
        </div>
    );
};

export default Navbar;