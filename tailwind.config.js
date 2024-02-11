/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'peach': {
          light: '#FFF8F5',
          DEFAULT: '#ffbe98',
          dark: '#281103',
        }
      },
      fontFamily: {
        cabinet: ['"Cabinet Grotesk"', 'system-ui', 'Roboto']
      },
      fontSize: {
        '4xl': ['16.5rem', {
          lineHeight: '0.7',
          letterSpacing: '-0.05em',
          fontWeight: '700',
        }],
      }
    },
  },
  plugins: [],
}

