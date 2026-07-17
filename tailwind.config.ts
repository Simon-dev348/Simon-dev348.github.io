import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080b13",
        panel: "#0d121e",
        panelBorder: "#1b2436",
        cyan: "#22d3ee",
        violet: "#a855f7",
        magenta: "#ec4899",
        muted: "#8b96ab",
        fog: "#e7eaf2",
      },
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #22d3ee 0%, #a855f7 55%, #ec4899 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
