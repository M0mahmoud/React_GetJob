/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          blue: "#4640de",
          blue50: "#26a4ff",
          footer1: "#202430",
          footer2: "#363a45",
        },
        mainText: {
          t: "#25324b",
          h: "#364158",
          p: "#969baa",
        },
      },
    },
  },
  plugins: [],
};
