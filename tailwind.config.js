/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        rose: {
          50: '#FFF8F5',
          100: '#FFE4E1',
          200: '#FFC0CB',
          300: '#FFB6D9',
          400: '#FF99C8',
          500: '#FF7EB6',
          600: '#E6699D',
          700: '#D4939D',
        },
        // Secondary palette
        lavender: {
          50: '#F8F5FF',
          100: '#F0E6FF',
          200: '#DCC9E8',
          300: '#E6D9FF',
          400: '#D4B5FF',
          500: '#C29AFF',
          600: '#A87FE8',
        },
        // Accent palette
        peach: {
          50: '#FFF5EE',
          100: '#FFD6BA',
          200: '#FFCC99',
          300: '#FFC080',
        },
        mauve: {
          50: '#F5F0F7',
          100: '#E8DDF0',
          200: '#D4B5FF',
          300: '#B388A8',
          700: '#5A3D5C',
        },
        // Neutral palette
        cream: '#FFFAF0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        full: '9999px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(180, 100, 140, 0.1)',
        'soft-md': '0 4px 12px rgba(180, 100, 140, 0.15)',
        'soft-lg': '0 8px 20px rgba(180, 100, 140, 0.2)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      },
      keyframes: {
        'float': {
          '0%, 50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDelay: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
