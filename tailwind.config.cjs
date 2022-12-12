/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#0d2234",
        "custom-primary": "#e11d48",
        "custom-text": "#606f7b",
      },
    },
  },
  plugins: [],
};
