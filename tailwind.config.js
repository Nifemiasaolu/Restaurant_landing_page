/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
 export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        '"Cormorant Upright, serif"',
        '"Open Sans, sans-serif"',
        {
          fontFeatureSettings: '"tnum", "lnum"'
        }
      ]
    },

    extend: {
      // backgroundImage: {

      // },

      colors: {
        "transparent": "transparent",
        "current": "currentColor",
        "golden": "#DCCA87",
        "black": "#0C0C0C",
        "gray": "#545454",
        "crimson": " #F5EFDB",
        "lightGrey": "#AAAAAA",
        "white": "#ffffff",
      }

  
    },
    // screens: {
    //   "tablet": "650px",
    //   // => @media (min-width: 640px) { ... }

    //   "laptop": "1024px",
    //   // => @media (min-width: 1024px) { ... }

    //   "desktop": "1280px",
    //   // => @media (min-width: 1280px) { ... }
    // }
  },
  plugins: [],
};
