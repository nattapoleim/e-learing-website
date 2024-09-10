/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   important: '#root',
   theme: {
      extend: {
         fontFamily: {
            noto: ['Noto Sans', 'sans-serif'],
            serif: ['Noto Serif', 'serif'],
         },
         backgroundImage: {
            hero: 'url(@/assets/hero.jpg)',
         },
      },
   },
   plugins: [require('tailwindcss-animate')],
   corePlugins: {
      preflight: false,
   },
}
