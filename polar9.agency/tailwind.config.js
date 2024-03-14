/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "btn-color": "#f2f2f2"
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FFFFF 100%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        montserrat: ["Monteserrate", "sans-serif"]
      },
      content: {
        "logo": "url('/src/assets/images/Logo.png')",
        "home-hero": "url('/src/assets/images/home-hero.png')",
      },
      screens:{
        xs: "480px",
        sm: "768px",
        md: "1060px"
      }
    },
  },
  plugins: [],
}

