module.exports = {
  plugins: [
    // https://npm.im/postcss-flexbugs-fixes (NEXT.JS DEFAULT)
    'postcss-flexbugs-fixes',

    // https://npm.im/postcss-preset-env (NEXT.JS DEFAULT)
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],

    // https://npm.im/@fullhuman/postcss-purgecss
    [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./pages/**/*', './src/components/**/*'],
        safelist: [],
        blocklist: [],
      },
    ],
  ],
}
