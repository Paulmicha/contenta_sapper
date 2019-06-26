module.exports = {
  corePlugins: {
    // Tailwind's fontSize is replaced by the responsive font size (rfs) plugin.
    // @see src/global_css/utilities/rfs.css
    fontSize: false
  },
  theme: {
    // This prototype uses Google web fonts installed locally from NPM packages.
    // Tailwind's 'sans' and 'serif' presets are overridden to use them.
    // @see src/global_css/index.css
    // TODO implement FOUT prevention.
    // See https://www.zachleat.com/web/comprehensive-webfonts
    fontFamily: {
      sans:
        '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: '"Scope One", Georgia, Cambria, "Times New Roman", Times, serif'
    }
  },
  variants: {},
  plugins: []
};
