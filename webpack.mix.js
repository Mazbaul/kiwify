const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js/admin').vue()
.sass('resources/css/app.scss', 'public/css');
