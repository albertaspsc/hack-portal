module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#002766',
        'primary-content': '#581188',
        secondary: '#ff00ff',
        complementary: '#0062FF',
        neutral: '#f2f2f2',
        // Background Color
        'base-100': '#e4e4e7',
        primaryDark: '#05149C',
        secondaryDark: '#BABFFF',
        complementaryDark: '#252427',
      },
      fontFamily: {
        sans: ['Roboto', 'Roboto Mono', 'sans-serif'],
      },
      width: {
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
        '1/7': '14.29%',
        '6/7': '85.71%',
      },
      height: {
        '9/10': '90%',
      },
      minWidth: {
        64: '16rem',
        56: '14rem',
        '160px': '160px',
        '3/4': '75%',
        '9/10': '90%',
      },
      minHeight: {
        '1/3': '33.33%',
        '9/10': '90%',
        '1/2': '50%',
        '1/4': '25%',
        '5/8': '62.5%',
        16: '4rem',
      },
      backgroundColor: (theme) => ({
        lightBackground: '#F4F4F4',
        aqua: '#D8F8FF',
        darkAqua: '#B0F1FF',
      }),
      backgroundImage: {
        'hero-pattern': `url(${'/assets/bg2.jpeg'})`, // !change
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
