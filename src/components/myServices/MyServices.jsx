import { useContext } from "react";
import { myServices } from "../../assets/assets";
import { MainContext } from "../../context/MainContext";
import { LuMoveRight } from "react-icons/lu";
import Heading from "../header/Heading";

const MyServices = () => {
  const { darkMode, slideDiagonal } = useContext(MainContext);
  return (
    <main id="service" className="w-full xs-sm:py-10 px-[12%]">
      <Heading id="services" />
      <div className="grid gap-6 my-10 grid-cols-auto">
        {myServices.map((item, index) => (
          <article
            key={index}
            className={`px-8 py-12 border border-gray-400 rounded-lg hover:bg-[4px_4px_0_#45a247] hover:shadow-[4px_4px_0_#45a247] hover:-translate-y-1 duration-500 cursor-pointer ${
              darkMode ? "text-white" : "text-gray-700"
            } ${
              slideDiagonal ? "animate-slideDiagonal opacity-100" : "opacity-0"
            } group`}
          >
            <img src={item.imgPath} className="w-10" alt="" />
            <h3 className="my-4 text-lg">{item.title}</h3>
            <p className="leading-5 text-sm">{item.description}</p>
            <button
              className={`flex gap-4 items-center mt-5 text-sm px-4 py-2 border border-gray-600 rounded-full text-nowrap group-hover:bg-gradient-to-r hover:from-custom-blue hover:to-custom-green transition duration-300 hover:text-white`}
            >
              Learn More
              <LuMoveRight className="w-5 h-5 mt-1" />
            </button>
          </article>
        ))}
      </div>
    </main>
  );
};

export default MyServices;
