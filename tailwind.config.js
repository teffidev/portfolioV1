/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sea: "#6fffe9",
        cream: "#fff5b2",
        grayLight: "#cacfd2",
        blueDark: "#2c3e50",
        darkBg: "#121212",
        darkText: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
