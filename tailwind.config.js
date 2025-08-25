import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Merged content paths
  theme: {
    extend: {
      colors: {
        primary: "#B8860B",
        secondary: "#8B4513",
        accent: "#D2B48C",
        background: "#F5F1EA",
        textPrimary: "#3E2F1C",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // DaisyUI themes setup
  },
};
