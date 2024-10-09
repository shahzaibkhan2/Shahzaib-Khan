import { FaArrowUp, FaGithub, FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Heading from "../header/Heading";
import { assets } from "../../assets/assets";
import { useMainContext } from "../../hooks/useMain/useMainContext";

const Contact = () => {
  const { darkMode, slideUpBtn, sendEmail, formRef, messageSent } =
    useMainContext();
  return (
    <div id="my-contact" className="px-[12%] w-full py-10">
      <Heading id="contact" />
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="mx-auto max-w-2xl text-black"
      >
        <div className="grid grid-cols-auto gap-6 mb-8 mt-10 ">
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            className="p-3 flex-1 border-[0.5px] outline-none bg-white rounded-full border-gray-400"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            className="p-3 flex-1 border-[0.5px] outline-none bg-white rounded-full border-gray-400"
          />
        </div>
        <textarea
          name="message"
          rows="7"
          placeholder="Type Your Message"
          className="outline-none p-4 w-full border-[0.5px] border-gray-400 mb-6 rounded-3xl bg-white resize-none"
        />
        <span className="text-green-500 text-lg">{messageSent}</span>
        <div
          className={`flex mt-4 flex-col xs-l:flex-row gap-10 items-center justify-between ${
            slideUpBtn ? "animate-slideUp opacity-100" : "opacity-0"
          }`}
        >
          <button
            type="submit"
            className="py-3 px-10 bg-gradient-to-r from-[#283c86] to-[#45a247] rounded-full text-white flex gap-2 items-center hover:bg-gradient-to-l transition duration-300 text-lg group"
          >
            Send Now
            {messageSent === "Sending..." ? (
              <img
                src={assets.loader}
                alt="loader"
                className="w-6 h-6 animate-spin ml-1"
              />
            ) : (
              <FaArrowUp className="w-5 h-5 group-hover:animate-bounce text-white" />
            )}
          </button>
          <div className="flex gap-10 items-center">
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/engr-shahzaib-khan1/",
                  "_blank"
                )
              }
              className="flex justify-center items-center aspect-square rounded-full p-2 bg-[#0a66c2] cursor-pointer hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]"
            >
              <FaLinkedinIn className="w-6 h-6 text-white" />
            </div>
            <div
              onClick={() =>
                window.open("https://github.com/shahzaibkhan2", "_blank")
              }
              className={`cursor-pointer ${
                darkMode
                  ? "hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]"
                  : "hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.5)]"
              } rounded-full`}
            >
              <FaGithub className={`w-10 h-10 ${darkMode && "text-white"}`} />
            </div>
            <div className="flex justify-center items-center aspect-square rounded-full p-2 bg-[#0a66c2] cursor-pointer hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]">
              <FaFacebookF className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
