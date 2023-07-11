/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-indigo': '#c5f0c9',
        'accent-blue': '#283EA3',
        'accent-green': '#1DB954',
      },
    },
  },
  plugins: [],
}

