/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        dark_500: "#1d1d26",
        dark_300: "#3D3D45",
      },
    },
  },
};
