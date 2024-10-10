import {
  AboutMe,
  Contact,
  Footer,
  Header,
  MyPortfolio,
  MyServices,
  Navbar,
} from "./components";
import VortexDemo from "./components/vortex/Vortex";
import { useMainContext } from "./hooks/useMain/useMainContext";

const App = () => {
  const { darkMode } = useMainContext();
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
      <VortexDemo />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
