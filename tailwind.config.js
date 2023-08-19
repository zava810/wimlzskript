const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1320',
        // primary: '#212428',
        // secondary: '#FF014F'
        secondary: '#14B8A6',
        lightNavy: '#0a192f'
      },
      fontFamily: {
        roboto_mono: ['var(--font-roboto-mono)', ...fontFamily.sans],
        roboto: ['var(--font-roboto)', ...fontFamily.sans]
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "animate-in": {
          from: {opacity: 0},
          to: {opacity: 1}
        },
        "animate-out": {
          from: { opacity: 1 },
          to: { opacity:0 }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "animate-in": "animate-in 0.2s ease-in",
        "animate-out": "animate-out 0.3s ease-out",
      },
    },
    listStyleType: {
      circle: 'circle'
    },
  },
  plugins: [require("tailwindcss-animate")],
}