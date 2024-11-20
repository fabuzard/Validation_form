/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./scripts/**/*.js"],
  theme: {
    extend: {
      colors:{
        'logo-color':'#242731'
      },
      fontFamily:{
        raleway:['Raleway','sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['roboto','sans-serif']
      }
    },
  },
  plugins: [],
}