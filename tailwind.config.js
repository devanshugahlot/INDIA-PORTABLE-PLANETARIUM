/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'space-dark': '#020B18',
        'space-navy': '#040D1F',
        'space-card': 'rgba(255, 255, 255, 0.04)',
        'accent-blue': '#00B4FF',
        'accent-gold': '#FFB830',
        'accent-purple': '#7B2FBE',
        'text-gray': '#B0BEC5',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}
