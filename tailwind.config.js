/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // https://blog.logrocket.com/how-to-use-custom-fonts-tailwind-css/#tailwind-web-fonts
      // https://www.geeksforgeeks.org/how-to-use-google-fonts-in-tailwind-css/
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lobster: ["Lobster", "sans-serif"]
      },
    },
  },
  variants: {
    // https://stackoverflow.com/questions/60917112/displaying-button-when-hovering-over-div-in-tailwindcss
    extend: {
      display: ["group-focus"],
    },
  },
  plugins: [],
}

