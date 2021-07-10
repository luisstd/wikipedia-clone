module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sentient"],
        text: ["General Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
