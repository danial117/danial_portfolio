/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        Abel:['Abel', 'sans-serif'],
        Anton:['Anton', 'sans-serif'],
        Lexend:['Lexend', 'sans-serif'],
        Poppins:['Poppins', 'sans-serif'],
        Livvic:['Livvic', 'sans-serif'],
      },
      screens:{

        'sm': '320px', // Small devices (e.g., phones)
        'sm1':'425px',
        'sm-md':'475px',//small to medium
        'md': '768px', // Medium devices (e.g., tablets)
        'lg': '1024px', // Large devices (e.g., laptops/desktops)
        'xl': '1280px', // Extra large devices (e.g., large desktops)

      },
    },
  },
  plugins: [],
}

