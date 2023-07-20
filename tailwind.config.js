/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts, tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "main-100": "#E7ECEC",
        "main-200": "#DDE4E4",
        "main-300": "#CED9D9",
        "main-400": "#C0D8D8",
        "main-500": "0E8080",
      },
      colors: {
        "main-100": "#E7ECEC",
        "main-200": "#DDE4E4",
        "main-300": "#CED9D9",
        "main-400": "#C0D8D8",
        "main-500": "0E8080",
      },
      keyframes: {
        "slide-right": {
          "0%": {
            transform: "translateX(-200px)",
            zIndex: "1",
          },
          "100%": {
            transform: "translateX(0)",
            zIndex: "1",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(200px)",
            zIndex: "2",
          },
          "100%": {
            transform: "translateX(0)",
            zIndex: "2",
          },
        },
        "slide-left2": {
          "0%": {
            transform: "translateX(200px)",
            zIndex: "2",
          },
          "100%": {
            transform: "translateX(0)",
            zIndex: "2",
          },
        },
      },
      animation: {
        "slide-right": "slide-right 0.3s linear;",
        "slide-left": "slide-left 0.3s linear;",
        "slide-left2": "slide-left2 0.3s linear;",
      },
    },
    screens: {
      1600: "1600px",
    },
  },
  plugins: [],
};
