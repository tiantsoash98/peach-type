/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      'peach': {
        light: '#FFF8F5',
        DEFAULT: '#ffbe98',
        dark: '#281103',
      }
    },
    fontFamily: {
      sans: ['"Cabinet Grotesk"', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      sm: '0.8rem',
      base: '1.5rem',
      xl: '1.75rem',
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
    }
  },
  plugins: [],
}

