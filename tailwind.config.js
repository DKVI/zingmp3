/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts, tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        moveToRight: {
          "0%": {
            transform: "translateX(-500px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        animation: {
          "move-to-right": "moveToRight 0.5s linear",
        },
      },
    },
  },
  plugins: [],
};
