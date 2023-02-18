/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", ///for NEXT13+
      "./components/**/*.{js,ts,jsx,tsx}",
    ], 
  theme: {
    extend: {},
  },
  plugins: [],
}
