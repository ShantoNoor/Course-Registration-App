/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue1: "#2F80ED",
        dark1: "#1C1B1B",
        dark2: "rgba(28, 27, 27, 0.60)",
        dark3: "rgba(28, 27, 27, 0.80)",
      },
      backgroundColor: {
        background1: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
