/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--foreground))',
        background: 'hsl(var(--background))',
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [],
};
