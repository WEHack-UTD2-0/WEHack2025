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
      screens: {
        'sm': '580px',
      },
      animation: {
        expand: 'expand 2s ease-in-out infinite',
      },
      keyframes: {
        expand: {
          '0%, 100%': { filter: 'drop-shadow(0rem 0rem 2rem #ffe9d7ad)' },
          '50%': { filter: 'drop-shadow(0rem 0rem 3rem #ffe9d7ad)'},
        }
      },
    },
  },
  plugins: [],
};
export default config;
