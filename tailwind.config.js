/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "canvas-light": "#F2F1EB",
        "canvas-dark": "#0D0F0E",
        electric: "#C7F000",
        "electric-glow": "rgba(199, 240, 0, 0.6)",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        slate: "#252925",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        '360': '90rem',
      },
      backgroundImage: {
        noise: "none",
      },
    },
  },
  plugins: [],
}
