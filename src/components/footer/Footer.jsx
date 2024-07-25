import { useContext } from "react";
import { assets } from "../../assets/assets";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MainContext } from "../../context/MainContext";

const Footer = () => {
  const { darkMode } = useContext(MainContext);
  return (
    <footer className="mt-20">
      <section className="flex justify-between items-center mx-[10%] flex-col sm:flex-row">
        <img
          src={darkMode ? assets.myLogoWhite : assets.myLogo}
          className="w-48 mb-2"
          alt="logo"
        />
        <p className="flex items-center gap-3 w-max">
          <MdOutlineAttachEmail className="w-8 h-8" />
          drshahzeb47@gmail.com
        </p>
      </section>
      <section className="sm:flex items-center text-center justify-between py-6 mx-[10%] mt-12 border-t border-gray-400">
        <p>© 2024 Shahzaib Khan. All Rights Reserved.</p>
        <ul className="flex gap-10 items-center justify-center sm:mt-0 mt-4">
          <li>
            <a
              href="https://www.linkedin.com/in/engr-shahzaib-khan1/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/shahzaibkhan2" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Discord</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
