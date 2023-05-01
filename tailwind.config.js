/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-450": "450px",
        "md-768": "768px",
        "lg-1024": "1024px",
      }
    },
  },
  plugins: [],
};
