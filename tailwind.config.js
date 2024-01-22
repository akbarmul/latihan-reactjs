/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "4rem",
      },
      center: true,
    },
    fontFamily: {
      sans: ["inter", "sans-serif"],
    },
  },
  plugins: [],
};
