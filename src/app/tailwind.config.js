module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // App Router files inside src
    './src/pages/**/*.{js,ts,jsx,tsx}', // Pages Router files inside src
    './src/components/**/*.{js,ts,jsx,tsx}', // Any components folder inside src
  ],
  theme: {
    extend: {
      colors: {
        gradientStart: '#6B73FF',
        gradientEnd: '#000DFF',
      },
    },
  },
  plugins: [],
};
