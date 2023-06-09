/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1792px',
    },
  },
  plugins: [],
};
