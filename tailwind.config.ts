import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontSize: {
        sm: "15px",
        base: "18px",
      },
      colors: {
        vuejs: {
          100: "#49e659",
          932: "#434252",
        },
      },
    },
  },
  plugins: [],
};
export default config;
