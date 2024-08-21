/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar-bg': '#2e2e2e',
        'navbar-text': '#9ca3af',
        'background-primary': '#f7f7f7',
        'button-primary': '#38b2ac',
        'button-hover': '#f97316',
        'footer-bg': '#0f0f0f',
        'footer-bg-2': '#1a1a1a',
        'footer-bg-3': '#121212',
      },
    },
  },
  plugins: [ require('@tailwindcss/forms'),],
}

