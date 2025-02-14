/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        heading: ['Cabinet Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['8rem', { lineHeight: '1', fontWeight: '800', letterSpacing: '-0.02em' }],
        'display-2': ['6rem', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.02em' }],
        'heading-1': ['4rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
};