/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  safelist: [
    // Button variations
    "btn-primary",
    "btn-secondary",
    "btn-danger",
    // Button sizes
    "btn-small",
    "btn-medium",
    "btn-large",
    // default classes
    "btn",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
