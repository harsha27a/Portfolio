import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: "#4a044e",
          light: "#7e22ce",
          muted: "#9333ea99",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 80% 20%, rgba(244,114,182,0.15), transparent 50%), radial-gradient(circle at 20% 80%, rgba(168,85,247,0.12), transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
