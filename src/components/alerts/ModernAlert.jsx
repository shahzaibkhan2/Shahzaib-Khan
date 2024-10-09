import { useMainContext } from "../../hooks/useMain/useMainContext";

const ModernAlert = () => {
  const { darkMode } = useMainContext();
  return (
    <a
      href="https://github.com/shahzaibkhan2/UrbanNest"
      target="_blank"
      className="fixed top-20 bg-transparent text-center py-4 lg:px-4 cursor-pointer z-50"
    >
      <div
        className={`p-2 items-center ${
          darkMode ? "text-indigo-100" : "text-black"
        } leading-none lg:rounded-full flex lg:inline-flex"
        role="alert`}
      >
        <span className="flex rounded-full bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold mr-3 animate-pulse">
          New
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          Checkout my new real estate website
          <strong className="text-blue-600 underline pl-1">UrbanNest</strong>
        </span>
        <svg
          className="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </a>
  );
};

export default ModernAlert;
