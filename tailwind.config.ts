import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        blue: "#3d8bff",
        purple: "#ab23ff",
        "dark-grey": "#13171d",
        "overlay-grey": "rgba(13, 15, 28, 0.7)",
        "overlay-grey-second": "rgba(19, 23, 29, 0.6)",
      },
      fontSize: {
        xs: "0.625rem",
        label: "12px",
        hero: "68px",
        subtitle: "22px",
        "big-subtitle": "38px",
      },
      maxWidth: {
        "container-width": "1470px",
        "container-width-wide": "1850px",
      },
      boxShadow: {
        "white-hover": "0 0 0 5px rgba(255, 255, 255, 0.3)",
        "white-hover-sm": "0 0 0 3px rgba(255, 255, 255, 0.3)",

        "purple-hover": "0 0 0 5px rgba(171, 35, 255, 0.4)",
        "purple-hover-sm": "0 0 0 3px rgba(171, 35, 255, 0.4)",

        "blue-hover": "0 0 0 5px rgba(61, 139, 255, 0.4)",
        "blue-hover-sm": "0 0 0 3px rgba(61, 139, 255, 0.4)",
      },
      gridTemplateColumns: {
        "1fr-auto": "1fr auto",
      },
      "@layer": {
        utilities: {},
      },
    },
  },
  plugins: [],
};
export default config;
