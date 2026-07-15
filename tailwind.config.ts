import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#0077b6',
          dark: '#005f8e',
          light: '#48b4e0',
        },
        accent: {
          DEFAULT: '#e30505',
          dark: '#b02601',
          light: '#e30505',
        },
      },
      fontFamily: {
        body: ['var(--it-ff-body)', 'sans-serif'],
        heading: ['var(--it-ff-heading)', 'sans-serif'],
      },
    },
  },
  // Disable Tailwind's preflight (base reset) so it doesn't conflict with Bootstrap
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

export default config;
