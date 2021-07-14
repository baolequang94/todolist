module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          base: "#616161",
          background: "#fafafa",
          primary: "#dbdbdb",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["active"],
      textColor: ["active"],
      fontSize: ["hover"],
      boxShadow: ["focus"],
      outline: ["focus", "active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
