/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#283c86",
        "custom-green": "#45a247",
        "custom-white-bg": "#f0eaea",
        "custom-gradient-bg-from": "#000000",
        "custom-gradient-bg-to": "#130F40",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      fontFamily: {
        bona: "Bona Nova SC",
      },
      screens: {
        xs: "355px",
        "xs-l": "580px",
        "xs-md": "530px",
        "xs-sm": "506px",
        "very-lg": "1100px",
      },
      animation: {
        slideLeft: "slideLeft 1.2s ease-in-out",
        slideUp: "slideUp 1.1s ease-out forwards",
        slideDiagonal: "slideDiagonal 1.1s ease-out forwards",
        slideBottom: "slideBottom 1.1s ease-out forwards",
        slideUpHigher: "slideUpHigher 1.7s ease-out forwards",
        spinBackForth: "spinBackForth 2s ease-in-out infinite",
      },
      keyframes: {
        slideLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideBottom: {
          "0%": {
            opacity: "0",
            transform: "translateY(200%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(200%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideUpHigher: {
          "0%": {
            transform: "translateY(200%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideDiagonal: {
          "0%": {
            transform: "translate(-200%, 200%)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "1",
          },
        },
        spinBackForth: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(25deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: ["selector", "class"],
};
