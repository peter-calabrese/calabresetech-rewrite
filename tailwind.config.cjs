/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Malachite: "#04CD1E",
        "Selective-Yellow": "#FFBC00",
        "Sunset-Orange": "#FF524E",
        "border-bar": "#3C3C3C",
        "left-border-bar": "#333333",
        "file-panel": "#252526",
        "react-logo": "#61DBFB",
        "file-text": "#CCCCCC",
        "html-logo": "#E44D27",
        "css-logo": "#214CE5",
        "JSON-logo": "#F5DE19",
      },
    },
  },
  plugins: [],
};
