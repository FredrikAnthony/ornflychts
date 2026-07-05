import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "#f6f1e7",
        ivory: "#fffaf0",
        ink: "#11130f",
        forest: "#16372d",
        moss: "#4f6658",
        brass: "#a48243",
        line: "#d8cdbb"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      maxWidth: {
        page: "1180px"
      }
    }
  },
  plugins: []
};

export default config;
