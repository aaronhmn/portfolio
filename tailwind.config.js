/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'bp880': '880px',
        'bp1100': '1100px',
        'bp1280': '1280px',
      },
    },
  },
  plugins: [],
};

