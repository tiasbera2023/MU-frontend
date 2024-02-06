import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#00526E",
        secondary: "#E6F2F5",
        "vat-primary": "#00689B",
        "vat-secondary": "#ddeff8",
        // "vat-primary": "#00526E",
        // "vat-secondary": "#E6F2F5",
      },
    },
  },
  plugins: [],
};
export default config;
