import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#EDE8DF',
          surface: '#F7F4EF',
          dark: '#1E1C18',
          green: '#2D4A35',
          terracotta: '#A0785A',
          text: '#1C1C1A',
          muted: '#7A7570',
          border: '#D9D3C9',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
