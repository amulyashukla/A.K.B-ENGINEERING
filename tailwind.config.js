export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#071a40',
          800: '#0d285d',
          700: '#1b3d7e',
          600: '#2a4d99',
          500: '#4a70c2',
          400: '#6a8ee0',
        },
        metallic: '#c5cbd5',
      },
      boxShadow: {
        glow: '0 25px 80px rgba(30, 60, 114, 0.18)',
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
