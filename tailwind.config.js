/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    // screens: {
    //   'phone': '480px',
    //   // => @media (max-width: 480px){...}
    // },

    extend: {
      boxShadow: {
        'nav': "0px 4px 10px 0px rgba(0, 0, 0, 0.15)"
      },

    },
    fontFamily: {
      manrope: ['Manrope']
    },

    fontFamily: {
      merriweather: ['Merriweather']
    },
    fontFamily: {
      merienda: ['Merienda']
    },

    fontFamily: {
      sourcesans: ['Source Sans 3']
    },

  },
  fontSize: {
    'info': '0.5rem',
  },
  plugins: [],
}

