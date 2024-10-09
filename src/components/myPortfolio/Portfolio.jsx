import { IoGlobeOutline } from "react-icons/io5";
import { useMainContext } from "../../hooks/useMain/useMainContext";

const Portfolio = ({
  image,
  title,
  description,
  projectLink,
  stack,
  projectStatus,
}) => {
  const { darkMode } = useMainContext();
  return (
    <article
      className={`block rounded-lg bg-white ${
        darkMode ? "shadow-md shadow-gray-600" : "shadow-lg shadow-gray-300"
      } dark:bg-surface-dark`}
    >
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <img className="rounded-t-lg" src={image} alt="project-image" />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div className="p-6 text-surface dark:text-white">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-xl font-medium leading-tight text-black mr-2">
            {title}
          </h5>
          <h6 className="text-gray-500 text-nowrap">{stack}</h6>
        </div>
        <p className="mb-4 text-base text-black">{description}</p>
        <div className="flex justify-between">
          <a
            href={projectLink}
            target="_blank"
            className="flex items-center gap-2 rounded-full text-[10px] bg-gradient-to-r from-[#283c86] to-[#45a247] px-4 xs:px-6 pb-2 pt-2.5 xs:text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <IoGlobeOutline size={15} />
            Visit Website
          </a>
          {projectStatus && (
            <div className="flex animate-pulse bg-black items-center rounded-full size-8 sm:size-10">
              <span className="whitespace-nowrap rounded-full bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.60em] sm:text-[0.75em] font-bold leading-none text-white dark:bg-slate-900 dark:text-primary-500">
                New
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
