/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        ss: "475px"
      },
      colors: {
        Sred: 'hsl(0, 94%, 66%)',
        Sblue: 'hsl(231, 69%, 60%)',
        Gblue: 'hsl(229, 8%, 60%)',
        VDblue: 'hsl(229, 31%, 21%)'
    },
    fontFamily: {
      Rubik : ["Rubik, sans-serif"]
  }
  },
  plugins: [],
}
}
