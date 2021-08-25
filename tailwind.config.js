module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./src/ui.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          figma: "#18a0fb",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
