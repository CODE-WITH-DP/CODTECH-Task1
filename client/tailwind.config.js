/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#000435',
        "secondary": '#ffa500',
        "tertiary": '#54D68B',
      },
      fontFamily: {
        sans: ['Poppins','sans-serif'],
      },
    },
    // for responsive
    screens: {
      sm: {max: '640px'},

      lg: {max: '2024px'},
    }
  },
  plugins: [],
}

