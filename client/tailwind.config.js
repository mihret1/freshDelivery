/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        'xss':'460px',
        'sm': '640px',
        'md': '768px',
        'ml': '880px',
        'lg': '1024px',
        'mg': '1150px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}