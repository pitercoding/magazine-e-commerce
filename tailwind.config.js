/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",              
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
  safelist: [
    "feminino",
    "masculino",
  ],
};