import { useContext } from "react";
import { myPortfolio } from "../../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MainContext } from "../../context/MainContext";
import Heading from "../header/Heading";

const MyPortfolio = () => {
  const { darkMode } = useContext(MainContext);
  return (
    <main id="my-portfolio" className="block w-full py-10 px-[12%]">
      <Heading id="portfolio" />
      <div className="grid my-10 gap-10 grid-cols-auto">
        {myPortfolio.map((item, index) => (
          <a
            target="_blank"
            href={item.linkToProject}
            key={index}
            className="block aspect-square bg-cover bg-no-repeat bg-center relative rounded-lg group cursor-pointer"
            style={{
              backgroundImage: `url(${item.imgPath})`,
            }}
          >
            <div className="w-10/12 absolute bg-black bg-opacity-50 rounded-md bottom-5 left-1/2 py-3 -translate-x-1/2 flex px-5 justify-between items-center group-hover:bottom-7 duration-500 gap-1 text-white group-hover:bg-opacity-90">
              <div className="w-full">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-white text-sm">{item.description}</p>
              </div>
              <div className="aspect-square border flex items-center justify-center w-9 transition group-hover:shadow-[2px_2px_0_#45a247] group-hover:border-[#45a247] rounded-full">
                <HiMiniArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </a>
        ))}
      </div>
      <button
        className={`py-3 px-8 w-max rounded-full border my-20 mx-auto flex items-center justify-center gap-4 ${
          !darkMode
            ? "hover:bg-black hover:text-white border-gray-700"
            : "hover:bg-white hover:text-black border-white"
        } transition duration-300`}
      >
        See More
        <FaArrowRight className="w-5 h-5" />
      </button>
    </main>
  );
};

export default MyPortfolio;
