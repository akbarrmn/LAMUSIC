/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      fontFamily: {
        'clash-display': ['ClashDisplay', 'sans-serif'],
        'plus-jakarta-sans': ['PlusJakartaSans', 'sans-serif'],
        'sf-pro-display': ['SFPRODISPLAYREGULAR', 'sans-serif'],
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          padding: '0 20px',
        }
      })
    }
  ]
}

