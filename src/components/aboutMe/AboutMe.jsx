import { aboutMe, assets, techs } from "../../assets/assets";
import { useMainContext } from "../../hooks/useMain/useMainContext";

const AboutMe = () => {
  const { darkMode, slideUp, slideUpHigher } = useMainContext();
  return (
    <main id="about" className={`pt-40 w-full xs-sm:pt-10 px-[12%]`}>
      <h4 className="mb-2 text-sm sm:text-lg text-center">Introduction</h4>
      <h3 className="text-4xl sm:text-6xl lg:text-[58px] text-center">
        About Me
      </h3>
      <div className="flex flex-col w-full lg:flex-row items-center my-20 gap-20">
        <div className="relative mx-auto max-w-max h-[500px] hidden xl:block">
          <img
            src={assets.about}
            className="w-64 h-[500px] rounded-3xl max-w-none sm:w-80"
            alt="me"
          />
        </div>
        <div className="flex-1">
          <p className="max-w-2xl mb-10">
            I am particularly drawn to the Full-Stack team's focus on creating
            fully functional, responsive and beautiful websites. With my
            experience in software engineering and my passion for solving
            unsolved challenges, I believe that I can bring a fresh perspective
            to the team.
          </p>
          <ul
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 max-w-2xl gap-6 mt-10 ${
              !darkMode ? "text-gray-700" : "text-white"
            }`}
          >
            {aboutMe.map((item, index) => (
              <li
                key={index}
                className={`p-6 border-[0.5px] border-gray-400 cursor-pointer rounded-xl hover:bg-[4px_4px_0_#45a247] hover:shadow-[4px_4px_0_#45a247] hover:-translate-y-1 ${
                  slideUp ? "animate-slideUp opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.imgPath}
                  className="w-10 h-10 mt-3 text-custom-green"
                />
                <h3 className="font-semibold text-lg my-4">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-xl">Technologies</h4>
          <ul className="flex gap-3 sm:gap-5 items-center flex-wrap 2xl:flex-nowrap">
            {techs.map((item, index) => (
              <li
                key={index}
                className={`flex justify-center items-center w-14 sm:w-16 border border-gray-400 aspect-square cursor-pointer rounded-lg bg-white ${
                  darkMode
                    ? "shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]"
                    : "shadow-[0_0_15px_5px_rgba(0,0,0,0.3)]"
                } ${
                  slideUpHigher
                    ? "animate-slideUpHigher opacity-100"
                    : "opacity-0"
                }`}
              >
                <img src={item} alt="technology" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
