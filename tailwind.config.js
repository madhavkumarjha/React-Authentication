/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: { min: "320px", max: "480px" },
        sm: { min: "481px", max: "720px" },
        md: { min: "721px", max: "1024px" },
        lg: { min: "1025px", max: "1599px" },
        xl: { min: "1600px", max: "1999px" },
        "2xl": { min: "2000px" },
        // fold: { min: "660px", max: "690px" },
      },
    },
  },
  plugins: [],
}