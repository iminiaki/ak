import animate from 'tailwindcss-animate'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'arial'],
        peydar: ['peydar'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
      backgroundImage: {
        'footer-texture': "url('/images/background/noise.png')",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shake: {
          '0%': { transform: 'rotate(-15deg)' },
          '100%': { transform: 'rotate(15deg)' },
        },
        jelly: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(1.25, 0.75)' },
          '50%': { transform: 'scale(0.75, 1.25)' },
          '75%': { transform: 'scale(1.15, 0.85)' },
        },
        jello: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
        texty: {
          '0%': { 'letter-spacing': '-0.5em', transform: 'translateZ(-700px)', opacity: '0' },
          '40%': { opacity: '0.6' },
          '100%': { transform: 'translateZ(0)', opacity: '1' },
        },
      },
      animation: {
        shake: 'shake 0.1s linear infinite alternate',
        jelly: 'jelly 0.6s ease-in-out',
        jello: 'jello 0.6s both',
        texty: 'texty 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [
    animate,
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          backgroundImage: 'linear-gradient(45deg , #172554 , #a21caf )',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
};

