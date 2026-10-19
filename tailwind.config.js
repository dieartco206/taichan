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
          950: '#0c0e17',
          900: '#121624',
          800: '#1b2032',
          700: '#262d46',
          600: '#353e5e',
        },
        flame: {
          500: '#ff4d00',
          600: '#e63e00',
          700: '#cc3300',
        },
        chili: {
          500: '#ef4444',
          600: '#dc2626',
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
          DEFAULT: '#ff1a75',
          glow: 'rgba(255, 26, 117, 0.65)',
          light: '#ff66a3',
        },
        neonCyan: {
          DEFAULT: '#00e5ff',
          glow: 'rgba(0, 229, 255, 0.65)',
          light: '#70f3ff',
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


