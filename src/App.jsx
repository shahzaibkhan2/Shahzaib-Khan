import Header from "./components/header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import Navbar from "./components/navbar/Navbar";
import MyServices from "./components/myServices/MyServices";
import MyPortfolio from "./components/myPortfolio/MyPortfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";

const App = () => {
  const { darkMode } = useContext(MainContext);
  return (
    <main
      className={`overflow-x-hidden ${
        darkMode
          ? "bg-gradient-to-r from-custom-gradient-bg-from to-custom-gradient-bg-to text-white"
          : "bg-custom-white-bg"
      }`}
    >
      <Navbar />
      <Header />
      <AboutMe />
      <MyServices />
      <MyPortfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
