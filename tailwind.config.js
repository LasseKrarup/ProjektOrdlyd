const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "sans": ["Ropa Sans", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      textColor: {
        'link': '#B9C8FF',
      },
      backgroundColor: {
        "main": "#4C4F57"
      },
      borderColor: {
        "main": "#4C4F57"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
