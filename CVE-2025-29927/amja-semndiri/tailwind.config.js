/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleIn: {
          "0%": {
            transform: "scale(0.7)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        slideRight: {
          "0%": {
            transform: "translateX(50rem)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(-50rem)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        scaleIn: "scaleIn 0.5s ease-out forwards",
        slideRight: "slideRight 1s ease-out forwards",
        slideLeft: "slideLeft 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
