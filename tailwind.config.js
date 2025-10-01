/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'Helvetica Neue', 'Arial', 'sans-serif'],
        hero: [
          'ui-sans-serif',
          'Helvetica Neue',
          'Avenir Next',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
