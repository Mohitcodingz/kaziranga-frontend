/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kaziranga: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#07552b', // Primary Brand Forest Green
          900: '#053e1f',
          950: '#022411',
        },
        safariGold: {
          DEFAULT: '#f5b400',
          hover: '#d99e00',
          dark: '#b45309',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
