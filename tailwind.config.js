/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--foreground))',
        background: 'hsl(var(--background))',
        border: 'hsl(var(--border))',
        card: 'hsl(var(--card))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
      },
    },
  },
  plugins: [],
};
