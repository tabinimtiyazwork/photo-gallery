/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#2e2e2e",
        "secondary-bg": "#edecec",
        "backdrop-color": "#000",
        "button-primary": "#38b2ac",
        "button-hover": "#f97316",
        "footer-bg": "#121212",
        "text-main": "#fff",
        "text-muted": "#939393",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
