import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  // <----------------- States -------------------->

  const [navMenu, setNavMenu] = useState(false);
  const [bgFixed, setBgFixed] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [slideUpBtn, setSlideUpBtn] = useState(false);
  const [slideUpHigher, setSlideUpHigher] = useState(false);
  const [slideDiagonal, setSlideDiagonal] = useState(false);

  // <--------------------- Rendering Area (useEffects etc.)-------------------->
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (darkMode) {
          setBgFixed("bg-fixed-dark");
        } else {
          setBgFixed("bg-fixed");
        }
      } else {
        setBgFixed("");
      }
    };

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setDarkMode(true);
      setBgFixed("bg-fixed-dark");
    } else {
      setDarkMode(false);
      setBgFixed("bg-fixed");
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [darkMode]);

  const handleScroll = () => {
    if (window.scrollY > 160) {
      setSlideUp(true);
    } else {
      setSlideUp(false);
    }
    if (window.scrollY > 250) {
      setSlideUpHigher(true);
    } else {
      setSlideUpHigher(false);
    }
    if (window.scrollY > 1250) {
      setSlideDiagonal(true);
    } else {
      setSlideDiagonal(false);
    }
    if (window.scrollY > 3350) {
      setSlideUpBtn(true);
    } else {
      setSlideUpBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // <----------------- Context Values -------------->
  const contextValues = {
    navMenu,
    setNavMenu,
    bgFixed,
    setBgFixed,
    darkMode,
    setDarkMode,
    slideUp,
    setSlideUp,
    slideUpHigher,
    setSlideUpHigher,
    slideDiagonal,
    setSlideDiagonal,
    slideUpBtn,
    setSlideUpBtn,
  };

  return (
    <MainContext.Provider value={contextValues}>
      {children}
    </MainContext.Provider>
  );
};
