/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "palatinate-blue": {
          50: "#ebf4ff",
          100: "#dbe9ff",
          200: "#bed7ff",
          300: "#97bbff",
          400: "#6e92ff",
          500: "#4c6bff",
          600: "#2e42ff",
          700: "#202fe2",
          800: "#1d2bb6",
          900: "#202d8f",
          950: "#131953",
        },
        "gl-gray": {
          100: "#F9FAFB",
        }
      }
    },
  },
  plugins: [],
}

