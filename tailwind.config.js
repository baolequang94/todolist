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

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeDown: "fadeDown 1.2s ease-in-out",
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
