import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/library/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        button: {
          primary: {
            DEFAULT: 'var(--purple)',
            border: 'var(--purple)',
            text: 'var(--white)',
          },
          secondary: {
            DEFAULT: 'var(--white)',
            border: 'var(--gray)',
            text: '#344054',
          },
          secondaryColor: {
            DEFAULT: 'var(--white)',
            border: '#D6BBFB',
            text: '#6941C6',
          },
        },
        text: {
          primary: '#101828',
          secondary: '#344054',
          tertiary: '#475467',
          placeholder: '#667085',
        },
        border: {
          primary: 'var(--gray)',
          secondary: '#EAECF0',
        },
        background: {
          primary: 'var(--white)',
          secondary: '#F9FAFB',
          gray: '#F5F5F5',
        },
        lightGray: '#EEEEEE',
      },
      boxShadow: {
        xs: '0 1px 2px #1018280D',
      },
      padding: {
        7.5: '30px',
      },
    },
  },
  plugins: [],
} satisfies Config;
