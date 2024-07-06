/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        levi: "Roboto",
      },
      colors: {
        basecolor: "#C3CAD9",
        navcolor: "#7D8FB3",
        bordercolor: "#EDEFF2",
        textcolor: "#6B7A99",
      },
    },
  },
  plugins: [],
};
