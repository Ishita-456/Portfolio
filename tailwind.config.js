/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF69B4',
        secondary: '#FFC0CB',
        ink: '#2D1B2E',
        cream: '#FFF8FA',
        dark: {
          bg: '#1A1320',
          card: '#241A2C',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'pink-gradient': 'linear-gradient(135deg, #FF69B4 0%, #FFC0CB 100%)',
        'pink-radial': 'radial-gradient(circle at top right, rgba(255,105,180,0.15), transparent 60%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drawline: {
          '0%': { strokeDashoffset: 600 },
          '100%': { strokeDashoffset: 0 },
        },
        pulseDot: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(0.9)' },
          '50%': { opacity: 1, transform: 'scale(1.15)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drawline: 'drawline 2.5s ease-out forwards',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
