import { IoClose } from "react-icons/io5";
import { useMainContext } from "../../hooks/useMain/useMainContext";

const MobileNavbarMenu = () => {
  const { navMenu, setNavMenu } = useMainContext();
  return (
    <ul
      className={`text-white fixed top-0 bottom-0 right-0 z-50 h-screen w-64 bg-gradient-to-r from-[rgb(40,60,134,0.9)] to-[rgb(69,162,71,0.9)] bg-opacity-80 px-10 py-20 flex flex-col gap-5 transition-transform duration-500 ease-in-out transform ${
        navMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        onClick={() => setNavMenu(false)}
        className="absolute top-5 right-6 cursor-pointer"
      >
        <IoClose className="w-8 h-8" />
      </div>
      <li className="text-lg">
        <a href="#home">Home</a>
      </li>
      <li className="text-lg">
        <a href="#about">About</a>
      </li>
      <li className="text-lg">
        <a href="#service">Services</a>
      </li>
      <li className="text-lg">
        <a href="#my-portfolio">Portfolio</a>
      </li>
      <li className="text-lg">
        <a href="#my-contact">Contact</a>
      </li>
    </ul>
  );
};

export default MobileNavbarMenu;
