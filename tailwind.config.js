/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans','sans-serif'],
      alata: ['Alata']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      letterSpacing : {

        widest: '.3sem'
      },
      colors: {
        brightRed: '#dc2626',
        brightRedLight: '#f87171',
        brightRedSupLight: '#fca5a5',
        darkBlue: '#2563eb',
        darkGrayishBlue: '#164e63',
        veryDarkBlue: '#1e3a8a',
        darkish: '#0f0f0f',
        veryPaleRed: '#fecaca',
        veryLightGray: '#bbc1c9',

      },
      animation : {
        'spin-round': 'spin 0.2s linear forwards',
        turn : 'turn 0.2s linear forwards'
      },

      keyframes : {
        turn : {
      
          '75%' : {transform: 'rotate(180deg)'},
          '100%': {color: '#0e7490'}
        }
      }
    },
  },
  plugins: [],
}
