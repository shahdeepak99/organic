/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f8f6',
          100: '#e8ebe6',
          200: '#d4dace',
          300: '#b5c2ae',
          400: '#96a88c',
          500: '#7d9374',
          600: '#657a5e',
          700: '#50604a',
          800: '#425040',
          900: '#374336',
        },
        accent: {
          50: '#fdf8f3',
          100: '#f9ede3',
          200: '#f2d9c5',
          300: '#e8bd9e',
          400: '#d4a574',
          500: '#c89158',
          600: '#b97d48',
          700: '#9a653d',
          800: '#7d5337',
          900: '#66442f',
        },
        sage: {
          50: '#f6f7f5',
          100: '#e8ebe6',
          200: '#d1d9cc',
          300: '#b0bca7',
          400: '#8b9d83',
          500: '#6b7d5a',
          600: '#56654a',
          700: '#44503b',
          800: '#384132',
          900: '#30372b',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfbf7',
          200: '#faf6ef',
          300: '#f5f1e8',
          400: '#ebe5d8',
          500: '#d9d0c0',
          600: '#bfb3a0',
          700: '#9d8f7c',
          800: '#7d705f',
          900: '#665c4f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-organic': 'linear-gradient(135deg, #10b981 0%, #84cc16 100%)',
      },
    },
  },
  plugins: [],
}