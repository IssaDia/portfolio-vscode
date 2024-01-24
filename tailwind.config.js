/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        topbar: {
          background: "#3c3c3c",
          firstButton: "#fe5f57",
          secondButton: "#febc2d",
          thirdButton: "#27c93f", // Replace with your desired color code
        },
      },
    },
  },
  plugins: [],
};
