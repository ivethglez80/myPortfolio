/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#B061B2",
        customLightColor: "#EECAFA",
      },
      fontFamily: {
        title: ["LeagueSpartan", "sans-serif"],
        subtitle: ["SpaceMono", "sans-serif"],
        txt: ["Kollektiff", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in"
      }
    },
  },
  plugins: [],
};

