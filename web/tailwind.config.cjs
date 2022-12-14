/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient':
          'linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.88%)'
      },
      keyframes: {
        rgb: {
          '0%': { backgroundPosition: '0 50%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0 50%' }
        }
      },
      animation: {
        rgb: 'rgb 5s ease-in-out infinite'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded']
  }
};
