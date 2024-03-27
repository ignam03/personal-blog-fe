/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        evil: "#0C0C0C",
        ironBlue: "#047889",
        lightGray: "#F4F5FB",
        darkGray: "#ACACAD",
      },
    },
  },
  plugins: [],
};
