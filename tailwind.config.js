/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        romantic: {
          50: '#fef7f7',
          100: '#feeaea',
          200: '#fdd8d8',
          300: '#fab8b8',
          400: '#f58c8c',
          500: '#ec5a5a',
          600: '#d73a3a',
          700: '#b52d2d',
          800: '#962a2a',
          900: '#7d2828',
        },
        blush: {
          50: '#fef7f3',
          100: '#feeee6',
          200: '#fdd9cc',
          300: '#fbbea8',
          400: '#f79574',
          500: '#f2704a',
          600: '#e3532a',
          700: '#be4220',
          800: '#97371e',
          900: '#7a301e',
        },
        peach: {
          50: '#fef9f2',
          100: '#fef0e2',
          200: '#fcdec0',
          300: '#f9c693',
          400: '#f5a364',
          500: '#f2834b',
          600: '#e3652a',
          700: '#bc4e25',
          800: '#964025',
          900: '#793622',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.8s ease-out forwards',
        'slideInRight': 'slideInRight 0.8s ease-out forwards',
      },
      backgroundImage: {
        'romantic-gradient': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'love-gradient': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'dreamy-gradient': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      }
    },
  },
  plugins: [],
};