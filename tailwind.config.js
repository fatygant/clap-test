/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clapperly-gold': '#d4af37',
        'clapperly-dark': '#1a1d21',
        'clapperly-gray': '#282a2e',
        'clapperly-border': '#424242',
        'clapperly-text': '#eaeaea',
        'clapperly-text-dim': 'darkgrey',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
