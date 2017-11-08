module.exports = {
  //parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    //'postcss-cssnext': {},
    'autoprefixer': {
      "browserslist": [
        "> 5%",
        "last 2 versions"
      ]
    },
    'cssnano': {
      "preset": [
      "default",
        {"discardComments": {"removeAll": true}}
      ]
    }
  }
}
