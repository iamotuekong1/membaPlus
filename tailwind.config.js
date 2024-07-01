/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/backdrop.jpg')",
      },
    },
  },
  plugins: [],
}

