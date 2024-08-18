import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
    <div className="w-full h-[55px] isolate  bg-white/60 backdrop-blur-sm shadow-lg ring-1 ring-black/5 fixed [z-index:1000]">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
        <Link to="home" smooth duration={700}>
          <h1 className=" text-slate-700  hover:text-purple-800 cursor-pointer text-xl font-bold">Home</h1>
        </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-slate-700 font-medium items-center">
            <Link to="skills" smooth duration={700}><li className="text-lg p-2 cursor-pointer hover:text-purple-700">Skills</li></Link>
            <Link to="project"  smooth duration={700}><li className="text-lg p-2 cursor-pointer  hover:text-purple-700">Projects</li></Link>
            <Link to="expreience" smooth duration={700}><li className="text-lg p-2 cursor-pointer  hover:text-purple-700">Experience</li></Link>
            <Link to="footer" smooth duration={700}><li className="text-lg p-2 cursor-pointer  hover:text-purple-700">Contact</li></Link>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-slate" />
          ) : (
            <AiOutlineMenu size={30} className="text-slate" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full isolate bg-white/60 backdrop-blur-sm shadow-lg ring-1 ring-black/5  text-slate-700 absolute top-[60px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
            }
        >
          <ul>
            <Link to="skills" smooth duration={700}><li className="text-lg p-2 cursor-pointer hover:text-purple-700 font-medium">Skills</li></Link>
            <Link to="project"  smooth duration={700}><li className="text-lg p-2 cursor-pointer hover:text-purple-700 font-medium">Projects</li></Link>
          <Link to="expreience" smooth duration={700}><li className="text-lg p-2 cursor-pointer hover:text-purple-700 font-medium">Experience</li></Link>
            <Link to="footer" smooth duration={700}><li className="text-lg p-2 cursor-pointer hover:text-purple-700 font-medium">Contact</li></Link>
          </ul>
        </div>
      </div>
    </div>
    <div id="home" className="pt-[60px]"></div>
     </>
  );
};

export default Navbar;
