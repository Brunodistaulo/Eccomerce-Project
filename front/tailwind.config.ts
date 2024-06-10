import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(180deg, transparent, #E5E7EB)"
      },
      colors: {
        gray: '#4F4F4F',
        white: '#ffffff',
      },
      keyframes: {
        upAndDown: {
          '0%': { transform: 'translateY(20px)', transition: 'transform 1s ease' },
          '100%': { transform: 'translateY(0%)', transition: 'transform 1s ease' },
        },
      },
      animation: {
        upAndDown: 'upAndDown 2s infinite',
      },
      width: {
        '9/10': '90%',
      },
      border : {
        'na': 'none !important',
      }
    },
  },
  plugins: [],
};
export default config;
