/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'pale-blue': 'hsl(225, 100%, 94%)',
      'bright-blue': 'hsl(245, 75%, 52%)',
      'blue-purple': 'hsl(245, 60%, 65%)',
      'very-pale-blue': 'hsl(225, 100%, 98%)',
      'desaturated-blue': 'hsl(224, 23%, 55%)',
      'dark-blue': 'hsl(223, 47%, 23%)',
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)'
    },
    screens: {
      desktop: '1440px'
    },
    fontFamily: {
      'red-hat': 'Red Hat Display, sans-serif'
    },
    extend: {
      backgroundImage: {
        desktop: "url('./assets/img/pattern-background-desktop.svg')",
        mobile: "url('./assets/img/pattern-background-mobile.svg')"        
      }
    },
  },
  plugins: [],
}

