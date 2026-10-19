/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#09080b',
          900: '#120f14',
          800: '#1b1620',
          700: '#26202c',
          600: '#362e3e',
        },
        flame: {
          500: '#ff3d00',
          600: '#ea3a00',
          700: '#c92e00',
        },
        chili: {
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        limeaccent: {
          400: '#a3e635',
          500: '#84cc16',
        },
        neonPink: {
          DEFAULT: '#e11d48',
          glow: 'rgba(225, 29, 72, 0.65)',
          light: '#fb7185',
        },
        neonCyan: {
          DEFAULT: '#f59e0b',
          glow: 'rgba(245, 158, 11, 0.65)',
          light: '#fde68a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'flame-pulse': 'flameGlow 3s ease-in-out infinite alternate',
        'float-slow': 'floating 4s ease-in-out infinite',
      },
      keyframes: {
        flameGlow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(255, 77, 0, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 35px rgba(255, 77, 0, 0.8))' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}


