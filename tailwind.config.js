/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage:{
        'banner': "url('@/assets/images/home_page/banner.svg')"
      },
      fontFamily:{
        'primary': ['Georama']
      }
    },
  },
  plugins: [],
}

