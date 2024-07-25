import { assets } from "../../assets/assets";
import { GoArrowUpRight } from "react-icons/go";
import { IoMoonSharp } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import MobileNavbarMenu from "./MobileNavbarMenu";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

const Navbar = () => {
  const { setNavMenu, navMenu, setDarkMode, darkMode, bgFixed, setBgFixed } =
    useContext(MainContext);

  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 py-4 xl:px-[8%] flex items-center z-30 justify-between ${bgFixed}`}
    >
      <img
        src={!darkMode ? assets.myLogo : assets.myLogoWhite}
        className="w-36 xs:w-44 sm:w-56 mr-14 cursor-pointer"
        alt="logo"
      />
      <ul
        className={`hidden md:flex rounded-full items-center gap-6 px-12 py-3 z-40 lg:gap-8 bg-white ${
          darkMode && "bg-gradient-to-r from-custom-blue to-custom-green"
        }`}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#my-portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#my-contact">Contact</a>
        </li>
      </ul>
      <div className="flex gap-3 items-center z-40">
        {!darkMode ? (
          <IoMoonSharp
            onClick={() => {
              setDarkMode((prev) => !prev);
              setBgFixed("bg-fixed-dark");
              localStorage.setItem("theme", "dark");
            }}
            className={`w-7 h-7 cursor-pointer z-[999] ${
              navMenu && "text-white"
            }`}
          />
        ) : (
          <MdLightMode
            onClick={() => {
              setDarkMode((prev) => !prev);
              setBgFixed("bg-fixed");
              localStorage.setItem("theme", "light");
            }}
            className={`w-7 h-7 cursor-pointer z-[999] ${
              navMenu && "text-white"
            }`}
          />
        )}
        <button
          className={`hidden lg:flex gap-3 items-center py-2.5 px-10 rounded-full border ml-4 ${
            darkMode
              ? "border-white hover:bg-white hover:text-black"
              : "border-gray-500 hover:bg-black hover:text-white transition duration-300"
          }`}
        >
          <a href="#my-contact">Contact</a>
          <GoArrowUpRight className="w-5 h-5" />
        </button>
        <button
          onClick={() => setNavMenu(true)}
          className="block md:hidden ml-3"
        >
          <RiMenu4Fill
            className={`w-8 h-8 ${navMenu ? "opacity-0" : "opacity-100"}`}
          />
        </button>
      </div>
      <MobileNavbarMenu className="z-40" />
    </nav>
  );
};

export default Navbar;
