import { assets } from "../../assets/assets";
import { FiDownload } from "react-icons/fi";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { PiMouseScrollLight } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";

const Header = () => {
  const { darkMode } = useContext(MainContext);
  return (
    <header
      id="home"
      className="pt-40 xs-sm:pt-0 w-11/12 max-w-3xl mx-auto text-center h-screen mt-7 flex items-center flex-col gap-4 justify-center relative"
    >
      <img
        src={assets.me}
        className="w-32 rounded-full animate-slideLeft"
        alt="myself"
      />
      <h3 className="flex gap-5 items-center mb-3 text-xl md:text-2xl animate-slideLeft">
        <img
          src={assets.wave}
          alt="hello"
          className="size-10 animate-spinBackForth"
        />{" "}
        Hi ! I Am Shahzaib Khan
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[58px] animate-slideLeft">
        Full Stack (MERN & NEXT.js) Developer & Engineer
      </h1>
      <p className="max-w-2xl mx-auto animate-slideLeft leading-7">
        I am an independent and self-motivated MERN Stack developer with over
        six years of hands-on experience, specializing in Next.js. As a
        freelancer, I am adept at managing diverse projects and delivering
        high-quality solutions.
      </p>
      <div className="flex flex-col items-center mt-4 gap-4 sm:flex-row">
        <button className="py-3 px-10 bg-gradient-to-r from-[#283c86] to-[#45a247] rounded-full text-white flex gap-2 items-center hover:bg-gradient-to-l transition duration-300 animate-slideBottom">
          <a
            href="https://www.linkedin.com/in/engr-shahzaib-khan1/"
            target="_blank"
            className="flex justify-center gap-2"
          >
            <FaLinkedin size={18} />
            Contact Me
          </a>
        </button>
        <button className="animate-slideBottom">
          <a
            className={`size-full flex gap-2 items-center py-3 px-10 ${
              !darkMode
                ? "bg-black  text-white hover:bg-white hover:text-black hover:border-gray-600"
                : "bg-white text-black hover:bg-transparent hover:text-white hover:border-white"
            } rounded-full transition duration-300 border`}
            href="./shahzaib_resume_mern.pdf"
            download
          >
            My Resume
            <FiDownload />
          </a>
        </button>
      </div>
      <PiMouseScrollLight className=" bottom-14 left-0 xs:left-10 sm:left-20 md:left-28 lg:left-40 fixed size-12 animate-pulse z-50" />
    </header>
  );
};

export default Header;
