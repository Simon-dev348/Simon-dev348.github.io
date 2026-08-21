import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070D",
        surface: "#0A0E17",
        "surface-2": "#0F1420",
        line: "#1B2233",
        muted: "#8892A6",
        ink: "#E4E9F2",
        cyan: {
          DEFAULT: "#22D3EE",
          soft: "#67E8F9",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          soft: "#A78BFA",
        },
        magenta: {
          DEFAULT: "#EC4899",
          soft: "#F472B6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-signal":
          "linear-gradient(90deg, #22D3EE 0%, #8B5CF6 50%, #EC4899 100%)",
        "gradient-radial":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        marquee: "marquee 28s linear infinite",
        "scan-line": "scan-line 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
