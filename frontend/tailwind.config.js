/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        moving: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(1200%)'}
        },
        move: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(1800%)'}
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'moving-border': 'moving 2s linear infinite',
        'moving-project': 'move 2s linear infinite'
      },
      
    },
  },
  
  plugins: [],
}