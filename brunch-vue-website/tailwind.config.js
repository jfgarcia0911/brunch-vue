/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   safelist: [
    'row-start-1', 'row-start-2', 'row-start-3', 'row-start-4',
    'col-start-1', 'col-start-2', 'col-start-3', 'col-start-4',
    { pattern: /^row-start-([1-4])$/ },   // pattern fallback
    { pattern: /^col-start-([1-4])$/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ['Cookie', 'cursive'],
      },

    },
  },
  plugins: [],
}
