/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./src/**/*.tsx', './public/index.html'],
  },
  theme: {
    fontFamily: {
      sans: [
        'Montserrat',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: ['Merriweather', 'Georgia', 'Cambria', 'Times New Roman'],
      mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
    },
    extend: {
      fontSize: {
        tiny: '0.625rem',
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      colors: {
        button: 'var(--color-button-text)',
        transparent: 'transparent',
        primary: {
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          'washed-out': 'var(--color-secondary-washed-out)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          disabled: 'var(--color-accent-disabled)',
        },
        black: '#191414',
        // Template
        green: {
          100: '#c7e6cd',
          300: '#9dd2a8',
          500: '#388d73',
          700: '#043330',
        },
        pastel: {
          blue: '#22acd3',
          teal: '#12f8a7',
          pear: '#d0e835',
        },
      },

      lineHeight: {
        tighter: '1.15',
      },

      boxShadow: {
        outlineLg: '0 0 0 4pt var(--color-primary-800)',
        outlineMd: '0 0 0 2pt var(--color-primary-800)',
        outlineSm: '0 0 0 1pt var(--color-primary-800)',
      },
      borderColor: {
        'color-800': 'var(--color-primary-800)',
      },
      transitionTimingFunction: {
        'in-out-hard': 'cubic-bezier(.77, 0, .175, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        breathe: {
          '0%, 100%': {
            boxShadow: '0 0 20px 2px var(--color-primary-100-translucent)',
            borderColor: 'var(--color-primary-300)',
          },
          '50%': {
            boxShadow: '0 0 20px 2px transparent',
            borderColor: 'var(--color-primary-700)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
      },
      animation: {
        'breathe-slow': 'breathe 5s infinite ease-in-out',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  variants: {
    scrollbar: ['rounded', 'dark'],
    extend: {
      borderWidth: ['last'],
    },
    // Template added
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')],
};
