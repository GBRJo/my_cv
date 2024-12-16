import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        craftwork: ['Craftwork Grotesk', 'sans-serif'],
      },
      colors: {
        designer: {
          background: '#F3F3F3',
          text: '#121212',
        },
        developer: {
          background: '#121212',
          text: '#F3F3F3',
        },
        bl: '#121212',
        W: '#F3F3F3',
        gr1: '#D9D9D9',
        gr2: '#e5e5ea',
        yl: '#E3FD16',
      },
      fontSize: {
        96: '6rem', // 96px
        64: '4rem', // 64px
        48: '48px',
        32: '32px',
        17: '17px',
        16: '16px',
        15: '15px',
        11: '11px',
      },
      lineHeight: {
        105: '105%',
        110: '110%',
        120: '120%',
        135: '135%',
        140: '140%',
        150: '150%',
      },
      letterSpacing: {
        '-0.02': '-0.02em',
        '-0.01': '-0.01em',
        '0': '0em',
        '0.03': '0.03em',
        '0.05': '0.05em',
      },
      fontWeight: {
        900: '900', // Heavy
        600: '600', // Bold
        500: '500', // Medium
        400: '400', // Regular
        300: '300', // Light
        100: '100',
      },
    },
  },
  safelist: [
    'theme-designer',
    'theme-developer',
  ],
  plugins: [],
} satisfies Config;
