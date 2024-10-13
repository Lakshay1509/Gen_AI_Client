/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        parisienne: ["Abril","Fatface"],
        body :['Fredoka']
      },
      colors: {
        primary: "#00C2FF",
        secondary: "#DD0BFF",
        dark: "#111111",
        theme : '#121523',
        chat : '#202437',
        font : '#ecdece',
        search : '#10131f'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
