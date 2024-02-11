/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      container: {
        center: true,
      },
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
        '4xl': ['18.25rem', {
          lineHeight: '0.7',
          letterSpacing: '-0.05em',
          fontWeight: '800',
        }],
      }
    },
  },
  plugins: [],
}

