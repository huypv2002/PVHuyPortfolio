module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        customPurple: "#f003fc",
      },
      boxShadow: {
        customPurpleBoxShadow: "0 0 15px rgba(240, 3, 252)",
      },
      dropShadow: {
        customPurpleDropShadow: "0 0 5px rgba(240, 3, 252)",
      },  
    },
  },
  plugins: [],
};
