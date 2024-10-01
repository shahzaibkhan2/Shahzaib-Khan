import { useContext } from "react";
import { myPortfolio } from "../../assets/assets";
import { MainContext } from "../../context/MainContext";
import Heading from "../header/Heading";
import Portfolio from "./Portfolio";

const MyPortfolio = () => {
  const { darkMode } = useContext(MainContext);
  return (
    <main id="my-portfolio" className="px-[12%] mt-10 mb-24">
      <Heading id="portfolio" />
      <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-14 gap-y-20">
        {myPortfolio.map((portfolio) => (
          <Portfolio
            key={portfolio.id}
            title={portfolio.title}
            description={portfolio.description}
            projectLink={portfolio.linkToProject}
            image={portfolio.imgPath}
            stack={portfolio.stack}
          />
        ))}
      </section>
    </main>
  );
};

export default MyPortfolio;
