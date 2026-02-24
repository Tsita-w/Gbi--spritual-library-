/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agt-blue': '#1e3a8a', // Deep Blue from poster
        'agt-yellow': '#fbbf24', // Vibrant Yellow from poster
        'spiritual-cream': '#fdfbf7', // Background from second image
        'church-red': '#881337', // Accent red from second image
      },
    },
  },
  plugins: [],
}