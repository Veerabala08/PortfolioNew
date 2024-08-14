import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[60px] bg-black font-semibold">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#ffffff] text-xl font-bold">Home</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center gap">
             <li className="text-lg p-2">Experience</li>
            <li className="text-lg p-2">Skills</li>
            <li className="text-lg p-2">Projects</li>
            <li className="text-lg p-2">Contact</li>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-lg p-2">Experience</li>
            <li className="text-lg p-2">Skills</li>
            <li className="text-lg p-2">Projects</li>
            <li className="text-lg p-2">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
