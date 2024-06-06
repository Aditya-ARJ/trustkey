/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#0f1211",
          "200": "#080e06",
          "300": "rgba(8, 14, 6, 0.5)",
          "400": "rgba(255, 255, 255, 0.17)",
        },
        mediumslateblue: {
          "100": "#6e6cee",
          "200": "#6d6cee",
          "300": "#6a67f8",
        },
        dimgray: "#525252",
        lavender: {
          "100": "#e9e9ff",
          "200": "#e4e3ff",
          "300": "#e0e0ff",
        },
        gainsboro: "#dcdcde",
        black: "#000",
        mediumpurple: "#8e8dff",
        blue: "#100dfe",
        azure: "#e7fbf9",
        yellow: "#fdf802",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        outfit: "Outfit",
        lato: "Lato",
        ubuntu: "Ubuntu",
      },
      borderRadius: {
        "31xl": "50px",
        mini: "15px",
        "781xl": "800px",
        "11xl": "30px",
        "3xs": "10px",
        "221xl": "240px",
        "301xl": "320px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      smi: "13px",
      "20xl": "39px",
      "4xl": "23px",
      "12xl": "31px",
      "23xl": "42px",
      "6xl": "25px",
      "15xl": "34px",
      xs: "12px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "42xl": "61px",
      "18xl": "37px",
      "30xl": "49px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
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
