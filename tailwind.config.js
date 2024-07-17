/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: {
    "postcss-import": {},
  },
  content: ["./public/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn"],
      },
      colors: {
        primaryColor: "#2A2D53",
        secondaryColor: "#4A6DFF",
        headerColor: "#3F4264",
        gold: "#FF9900",
      },
    },
  },
  plugins: [],
};
