const elixir = require('laravel-elixir')

require('laravel-elixir-vue-2')
require('laravel-elixir-browserify-official')

elixir((mix) => {
  mix.browserSync({
    files: ['public/css/*.css', 'public/js/*.js'],
    open: false,
    proxy: {
      target: 'http://localhost:1000'
    },
    port: 4000
  })
  mix.sass('styles.scss')
  mix.webpack('app.js', 'public/js/app.js')
})