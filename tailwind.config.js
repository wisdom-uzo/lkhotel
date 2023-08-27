/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: "#152c5b",
        mediumslateblue: "#3252df",
        gainsboro: "#e5e5e5",
        darkgray: "#b0b0b0",
        deeppink: "#ff498b",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      base: "16px",
      "7xl": "26px",
      lg: "18px",
      "23xl": "42px",
      "5xl": "24px",
      mini: "15px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
