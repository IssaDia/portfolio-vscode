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
          firstVariant: "#a4a4a4",
          secondVariant: "#666666",
        },
        sidebar: {
          background: "#3c3c3c",
          secondVariant: "#666666",
          firstVariant: "#a4a4a4",
          thirdVariant: "#7d7d7d",
        },
        menu: {
          background: "#252526",
          firstVariant: "#a4a4a4",
          secondVariant: "#666666",
        },
        main: {
          background: "#1e1e1e",
          firstVariant: "#a4a4a4",
          secondVariant: "#2d2d2d",
        },
        codeBlock: {
          firstVariant: "#b37aae",
        },
        bottombar: {
          background: "#007acc",
        },
      },
      screens: {
        phone: "375px",
        landscape: "667px",
        ipadPortrait: { raw: "(min-width: 768px)" },
        ipadLandscape: "1024px",

        // tablet: "640px",
        // // => @media (min-width: 640px) { ... }

        // laptop: "1024px",
        // // => @media (min-width: 1024px) { ... }

        // desktop: "1280px",
        // // => @media (min-width: 1280px) { ... }
      },
      borderWidth: {
        0.5: "0.5px",
      },
    },
  },
  plugins: [],
};
