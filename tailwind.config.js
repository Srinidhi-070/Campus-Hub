/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all files in the src directory
    "./public/index.html",        // Include public index.html if applicable
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",      // Example custom color
        secondary: "#9333EA",
      },
    },
  },
  plugins: [],
};
