module.exports = {
  content: ["./src/**/*.{html,js,ejs}", "./src/_static/js/alpine.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false,
    logs: false,
  },
}
