// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        500: "500ms",
        300: "300ms",
      },
      flex: {
        100: "0 0 100%",
      },
      transitionDelay: {
        40: "40000ms",
      },
      boxShadow: {
        sidebarshadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        breadcrumbshadow:
          "0 7px 14px 0 rgba(50, 50, 50, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)",
      },
      animation: {
        marquee: "marquee 5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        statusbg: "#e15425",
        menutext: "#e15425",
        hovermenubg: "#efefef",
        "theme-black": {
          DEFAULT: "#444444",
        },
        "theme-green": {
          DEFAULT: "#16C26A",
          light: "#38D9A9",
          dark: "#0D2B21",
        },
      },
    },
  },
  plugins: [],
};
