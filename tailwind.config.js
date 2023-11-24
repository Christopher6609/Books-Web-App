/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      boxShadow: {
        'nav': "0px 4px 10px 0px rgba(0, 0, 0, 0.15)"
      },
    },
  },
  fontSize: {
    'info': '0.5rem',
  },
  plugins: [],
}

