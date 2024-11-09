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
      backgroundImage: {
        'main-banner-mobile': "url('/assets/home/main-banner-mobile.png')",
        'main-banner-background':
          "url('/assets/home/main-banner-background.png')",
        'industries-banner': "url('/assets/industries/industries-banner.png')",
        'use-case-1': "url('/assets/industries/use-case-1.png')",
        'use-case-2': "url('/assets/industries/use-case-2.png')",
      },
    },
    fontSize: {
      sm: ['14px', { lineHeight: '24px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '26px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['28px', { lineHeight: '36px' }],
      '4xl': ['40px', { lineHeight: '48px' }],
      '5xl': ['54px', { lineHeight: '34px' }],
      '6xl': ['80px', { lineHeight: '36px' }],
    },
  },
  plugins: [],
};
