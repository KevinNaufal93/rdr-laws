import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue:{
          1500:'#093b6d',
        },
        white: {
          1500: '#e7e8ea'
        },
        black: {
          DEFAULT: '#000',
          100: '#000819'
        }
      },
    },
  },
  plugins: [],
};
export default config;
