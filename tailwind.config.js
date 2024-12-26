/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        fadeUp: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '50%': { opacity: 1, transform: 'translateY(-20px)' },
          '100%': { opacity: 0, transform: 'translateY(-40px)' },
        },
      },
      animation: {
        tilt: 'tilt 0.3s ease-in-out forwards',
        fadeUp: 'fadeUp 0.5s linear forwards',
      },
      fontFamily: {
        space: ['SpaceMono'],
      },
    },
  },
  plugins: [],
  safelist: ['hover:animate-tilt', 'animate-tilt'],
};
