/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        responsiveBanner: "clamp(1rem, 5vw, 5rem)",
        responsiveBanner2: "clamp(1rem, 5vw, 10rem)",
        responsiveNav: "clamp(1rem, 5vw, 1.25rem)",
        responsiveParagraph: "clamp(1rem, 5vw, 1.5625rem)",
        responsiveParagraph2: "clamp(1rem, 5vw, 1.875rem)",
        responsiveFoot: "clamp(1rem, 5vw, 11.6875rem)",
      },
    },
  },
  plugins: [],
};
