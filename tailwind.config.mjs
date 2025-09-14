/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00f7ff',
        surface: { 900: '#0b0f18', 800: '#0f172a' }
      },
      boxShadow: {
        neon: '0 0 10px #00f7ff, 0 0 20px #00f7ff, 0 0 40px #00f7ff',
      },
      textShadow: {
        neon: '0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 20px #00f7ff',
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtils = {
        '.text-shadow-neon': {
          textShadow: '0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 20px #00f7ff',
        }
      }
      addUtilities(newUtils, ['responsive', 'hover'])
    }
  ]
}
