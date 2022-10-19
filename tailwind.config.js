/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    fontFamily: {
      work: ["Work Sans", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      colors: {
        oxfordBlue: "#132742",
        isabelline: "#FAF7F2",
        strongCoral: "#FD6E4C",
        coral: "#FC7C4B",
        cinza: "#8E8E8E",
        white: "#ffffff",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
