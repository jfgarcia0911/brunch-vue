/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cookie: ['Cookie', 'cursive'],
      },
      colors: {
        white: '#ffffff', // override default white

      }
    },
  },
  plugins: [],
}
