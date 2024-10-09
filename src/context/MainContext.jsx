import { createContext, useEffect, useRef, useState } from "react";
import { configFiles } from "../config/config";
import emailjs from "@emailjs/browser";

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
  const [messageSent, setMessageSent] = useState("");
  const [underline, setUnderline] = useState("home");
  const [showAll, setShowAll] = useState(false);
  // <------------------------------ References (useRef etc.) -------------------->

  const formRef = useRef(null);

  // <---------------------------- Methods and Functions -------------------->

  const sendEmail = (e) => {
    e.preventDefault();
    const refValue = formRef.current.elements;
    const selectedElem = Array.from(refValue).filter(
      (elem) => elem.tagName === "INPUT" || elem.tagName === "TEXTAREA"
    );
    const isEmpty = selectedElem.some((val) => val.value.trim() === "");
    const minLen = selectedElem.some((val) => val.value.length <= 3);
    if (isEmpty) {
      setMessageSent("All fields required");
      return;
    } else if (minLen) {
      setMessageSent("Text length should be or greater than 4 characters");
      return;
    }
    setMessageSent("Sending...");

    emailjs
      .sendForm(
        configFiles.emailJsServiceKey,
        configFiles.emailJsTemplateKey,
        formRef.current,
        {
          publicKey: configFiles.emailJsPublicKey,
        }
      )
      .then(
        () => {
          setMessageSent("Message sent !");
          formRef.current.reset();
        },
        (err) => {
          console.log("Error occured ! ", err);
          setMessageSent("Message not sent !");
          formRef.current.reset();
        }
      );
  };

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
    sendEmail,
    formRef,
    messageSent,
    underline,
    setUnderline,
    showAll,
    setShowAll,
  };

  return (
    <MainContext.Provider value={contextValues}>
      {children}
    </MainContext.Provider>
  );
};
