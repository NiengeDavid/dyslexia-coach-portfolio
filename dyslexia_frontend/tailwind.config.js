/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html', 
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'regalGreen': '#006273',
        'gris': '#0A6D7E',
        'green': '#064B57'
      },
      boxShadow: {
        '2xl': ' 0px 10px 15px -3px rgba(103, 90, 21, 0.5)',
        '3xl': ' 0px 1px 2px 0px rgba(0, 0, 0, 0.05) ',
        'productShadow': '0px 1px 2px -1px rgba(0, 0, 0, 0.1) 0px 1px 3px 0px rgba(0, 0, 0, 0.1)'
      },
    },
    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

