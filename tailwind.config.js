module.exports = {
  purge: [
      './templates/**/*.twig',
      './assets/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix(selector) {
    if (['.align-bottom'].includes(selector)) {
      return 'tw-';
    }

    return '';
  },
}
