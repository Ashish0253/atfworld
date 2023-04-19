/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC7227",
        secondary: "#15274D",
      },
      fontFamily: {
        body: "'Raleway', sans-serif",
        number: "'Montserrat', sans-serif",
      },
      backgroundImage: {
        frame: "url('/src/assets/TestimonialFrame.svg')",
        project: "url('/src/assets/project.svg')",
      },
    },
  },
  plugins: [],
};
