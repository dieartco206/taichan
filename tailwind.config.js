/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f5eedd',
          300: '#ebdcc2',
          400: '#ded0b6',
        },
        espresso: {
          DEFAULT: '#1c1917',
          light: '#292524',
          dark: '#0c0a09',
        },
        charcoal: {
          950: '#09080b',
          900: '#120f14',
          800: '#1b1620',
          700: '#26202c',
          600: '#362e3e',
        },
        flame: {
          500: '#ea580c',
          600: '#c2410c',
          700: '#9a3412',
        },
        chili: {
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
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
          DEFAULT: '#dc2626',
          glow: 'rgba(220, 38, 38, 0.4)',
          light: '#f87171',
        },
        neonCyan: {
          DEFAULT: '#ea580c',
          glow: 'rgba(234, 88, 12, 0.4)',
          light: '#fdba74',
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


