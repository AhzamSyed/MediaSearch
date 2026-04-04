/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors from your index.css variables
        c1: 'rgba(12,43,78)',
        c2: 'rgba(26,61,100)',
        c3: 'rgba(29,84,108)',
        c4: 'rgba(244,244,244)',
      },
    },
  },
  plugins: [],
}