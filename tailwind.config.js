/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B3D91',
          'blue-secondary': '#1557B0',
          'blue-light': '#EEF4FA',
          'blue-soft': '#E6EFF9',
          yellow: '#FFC400',
          'yellow-hover': '#E5B000',
          'yellow-light': '#FFF9E6',
          bg: '#F5F8FC',
          border: '#E2E8F0',
          text: '#111827',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 61, 145, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(11, 61, 145, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
        'dropdown': '0 10px 40px -10px rgba(11, 61, 145, 0.15)',
        'subtle': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
      },
    },
  },
  plugins: [],
}
