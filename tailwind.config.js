/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#292727",
          "200": "#161515",
          "300": "#121212",
          "400": "#111010",
          "500": "#212020",
          "600": "#1e1b1b",
          "700": "#1d1b1b",
          "800": "#171616",
          "900": "#171515",
          "1100": "#151414",
          "1200": "#131212",
          "1400": "#121010",
          "1600": "#0e0e0e",
          "1700": "#0e0d0d",
          "1800": "#0d0c0c",
          "1900": "#0b0a0a",
          "2000": "#090909",
          "2100": "rgba(252, 252, 252, 0.24)",
        },
        black: "#000",
        white: "#fff",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.51)",
        },
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "rgba(245, 245, 245, 0.4)",
        },
        silver: "#c7c3c2",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        mini: "15px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "5xl": "24px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
