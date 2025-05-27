/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "azul":"#41588e",
        "celeste":"#b0c4df",
        "marroncito":"#f0edea"
      },
      fontFamily:{
        "poppins":["'Poppins-Regular'","sans-serif"],
        "open-sans":["'Open-Sans-Regular'","sans-serif"],
        "breathing":["'Breathing'","sans-serif"]
      },
      screens: {
        "3xl":"1800px"
      }
    },
  },
  plugins: [],
}

