/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        'mono-x': ['"IBM Plex Mono"', 'Menlo', 'Courier New', 'monospace'],
        sans: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        parchment: '#f5f1e8',
        ink: '#141413',
        rust: '#c23a22',
        subtle: '#5e5b52',
        faint: '#8f8a7c',
        card: '#faf8f5',
        tint: '#ece6d9',
      },
    },
  },
  plugins: [],
};
