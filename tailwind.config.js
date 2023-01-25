/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {},
  theme: {
    extend: {
      fontFamily: {
        jost: ["var(--font-jost)"],
        quicksand: ["var(--font-quicksand)"],
        terminal: ["var(--font-inconsolata)"],
        retro: ["var(--font-press_start_2p)"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
