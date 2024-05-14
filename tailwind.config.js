/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': `url('./src/assets/images/u-bg.svg')`
      },
      animation: {
        rotateIcon: 'rotate 20s linear infinite;'
      },
      keyframes: {
        rotate1: {
          'from': { transform: 'rotate(0deg) translateY(140px) rotate(0deg);' },
          'to': { transform: 'rotate(1turn) translateY(140px) rotate(0deg);' }
        },
        rotate2: {
          'from': { transform: 'rotate(0deg) translateX(-110px) translateY(-80px) rotate(0deg);' },
          'to': { transform: 'rotate(1turn) translateX(-110px) translateY(-80px) rotate(0deg);' }
        },
        rotate3: {
          'from': { transform: 'rotate(0deg) translateX(110px) translateY(-80px) rotate(0deg)' },
          'to': { transform: 'rotate(1turn) translateX(110px) translateY(-80px) rotate(-1turn)' }
        }
      },
      clipPath: {
        'inset': 'clip-path(0 -10px -10px -10px)',
      }
    },
    colors: {
      "primary-color": "var(--primary-color)",
      "secondary-color": "var(--secondary-color)",
      "input-color": "var(--input-color)",
      "background-color-main": "var(--background-color-main)"
    },
  },
  plugins: [],
}

