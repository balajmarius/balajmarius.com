/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Inconsolata", "system-ui", "sans-serif"],
      },
      colors: {
        blue: {
          DEFAULT: "#0070F3",
        },
        red: {
          DEFAULT: "#FF2E00",
        },
        gray: {
          50: "#EDEDED",
          100: "#BEBEBE",
          150: "#888888",
          200: "#333333",
        },
      },
    },
  },
};
