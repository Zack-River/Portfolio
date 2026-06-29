/** @type {import('tailwindcss').Config} */
export default {
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
        "canvas-light": "#f2f2f0",
        "canvas-dark": "#0a0a0b",
        electric: "#3d7fff",
        "electric-glow": "rgba(61, 127, 255, 0.6)",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        slate: "#64748b",
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
