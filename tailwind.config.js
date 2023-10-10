/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'red': '#f02d34',
      'white': '#FFFFFF',
      'black': '#000000',
      'lightwood': '#D2B48C',
      'beige': '#F5F5DC',
      'darkwood': '#8B4513',
      'mint': '#98FB98',
      'lavander': '#E6E6FA',
      'navyblue': ' #000080',
      'darkgreen': ' #006400 ',
      'robin': '#ea1e4f'
    },
    extend: {
      spacing: {
        '13': '50px',
        '17': '70px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-50%)'}
        }
      }
    },
  },
  plugins: [],
}
