/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF3F9',
          100: '#D5E1EF',
          200: '#A9C2DF',
          300: '#7499C6',
          400: '#4A74A8',
          500: '#2D5585',
          600: '#1E4170',
          700: '#12305A',
          800: '#0B2447',
          900: '#071B3A',
          950: '#041128',
        },
        ieee: {
          50: '#E6F2F7',
          100: '#BFDDEB',
          200: '#8CC3DB',
          300: '#4DA5C7',
          400: '#1A88B3',
          500: '#006699',
          600: '#00557F',
          700: '#004466',
          800: '#00334D',
          900: '#002233',
        },
        cyan: {
          300: '#7FEAFB',
          400: '#33CCE8',
          500: '#00B8D9',
          600: '#0093AE',
          700: '#00738A',
        },
        success: { 500: '#16A34A', 600: '#15803D' },
        warning: { 500: '#F59E0B', 600: '#B45309' },
        danger: { 500: '#E11D48', 600: '#BE123C' },
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(7, 27, 58, 0.12)',
        glow: '0 0 40px rgba(0, 184, 217, 0.25)',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'menu-in': {
          from: { opacity: '0', transform: 'translateY(-12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'menu-out': {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(-12px)' },
        },
        'sheet-in': {
          from: { opacity: '0', transform: 'translateY(40px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'sheet-out': {
          from: { opacity: '1', transform: 'translateY(0) scale(1)' },
          to: { opacity: '0', transform: 'translateY(40px) scale(0.98)' },
        },
        'pill-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
        'fade-in': 'fade-in 250ms ease-out both',
        'fade-out': 'fade-out 250ms ease-in both',
        'fade-up': 'fade-up 700ms ease-out both',
        'scale-in': 'scale-in 800ms ease-out both',
        'menu-in': 'menu-in 200ms ease-out both',
        'menu-out': 'menu-out 200ms ease-in both',
        'sheet-in': 'sheet-in 250ms ease-out both',
        'sheet-out': 'sheet-out 250ms ease-in both',
        'pill-in': 'pill-in 250ms ease-out both',
      },
    },
  },
  plugins: [],
};
