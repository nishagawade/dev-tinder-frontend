/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust as per your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
