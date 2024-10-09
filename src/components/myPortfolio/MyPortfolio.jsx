import { myPortfolio } from "../../assets/assets";
import Heading from "../header/Heading";
import Portfolio from "./Portfolio";

const MyPortfolio = () => {
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
            projectStatus={portfolio.projectStatus}
          />
        ))}
      </section>
    </main>
  );
};

export default MyPortfolio;
