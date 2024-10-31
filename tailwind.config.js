/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#062052',
        secondary: '#7DB2E3',
        tertiary: '#71DBD4',
        purple: '#340573',
        lightPurple: '#D6C0F3',
        accentPurple: '#9063CD',
      },
    },
    fontSize: {
      sm: ['14px', { lineHeight: '24px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '26px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
    },
  },
  plugins: [],
};
