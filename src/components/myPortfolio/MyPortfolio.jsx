import { miniMyPortfolio, myPortfolio } from "../../assets/assets";
import { useMainContext } from "../../hooks/useMain/useMainContext";
import { GoArrowUpRight } from "react-icons/go";
import Portfolio from "./Portfolio";
import Heading from "../header/Heading";

const MyPortfolio = () => {
  const { showAll, setShowAll, darkMode } = useMainContext();
  return (
    <main id="my-portfolio" className="px-[12%] mt-10 mb-24">
      <Heading id="portfolio" />
      <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-14 gap-y-20">
        {showAll
          ? myPortfolio.map((portfolio) => (
              <Portfolio
                key={portfolio.id}
                title={portfolio.title}
                description={portfolio.description}
                projectLink={portfolio.linkToProject}
                image={portfolio.imgPath}
                stack={portfolio.stack}
                projectStatus={portfolio.projectStatus}
              />
            ))
          : miniMyPortfolio.map((portfolio) => (
              <Portfolio
                key={portfolio.id}
                title={portfolio.title}
                description={portfolio.description}
                projectLink={portfolio.linkToProject}
                image={portfolio.imgPath}
                stack={portfolio.stack}
                projectStatus={portfolio.projectStatus}
              />
            ))}
      </section>
      <div className="w-full flex items-center justify-center my-14">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className={`flex flex-nowrap gap-3 items-center py-2.5 px-10 rounded-full border ml-4 ${
            darkMode
              ? "border-white hover:bg-white hover:text-black"
              : "border-gray-500 hover:bg-black hover:text-white transition duration-300"
          } `}
        >
          {showAll ? "Show less" : "Show all"}
          <GoArrowUpRight className="size-5" />
        </button>
      </div>
    </main>
  );
};

export default MyPortfolio;
