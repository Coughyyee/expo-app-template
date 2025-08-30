/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        custom: "CustomFont", // custom font from index.tsx file
      },
      primary: "#696969", // Enter Tailwind things
    },
  },
  plugins: [],
};
