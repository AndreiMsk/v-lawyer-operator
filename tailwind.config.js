module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '.65rem'
      }
    },
  },
  plugins: [
    "@tailwindcss/aspect-ratio",
    "@tailwindcss/forms"
  ],
}