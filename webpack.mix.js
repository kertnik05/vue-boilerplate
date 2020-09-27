const mix = require('laravel-mix');

require("laravel-mix-vue3");

mix.vue3('src/js/app.js', 'dist/js')
   .sass('src/sass/app.scss', 'dist/css')
   .setPublicPath('dist');