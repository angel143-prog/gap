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
      colors: {
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
