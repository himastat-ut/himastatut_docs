// vuepress/config.js
const webpackConfig = require('./webpack.config.js');  // Mengimpor konfigurasi webpack

module.exports = {
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      config.devtool = 'source-map';  // Hanya aktifkan di build client-side
    }

    // Gabungkan pengaturan minifikasi dan kompresi dari webpack.config.js
    Object.assign(config, webpackConfig);
  },

  plugins: [
    // Menambahkan plugin PurgeCSS untuk menghapus CSS yang tidak digunakan
    require('@fullhuman/postcss-purgecss')({
      content: [
        './docs/**/*.md',            // Periksa file markdown untuk melihat CSS yang digunakan
        './docs/.vuepress/**/*.{js,vue,html}'  // Periksa semua file Vue dan JS
      ],
      safelist: []  // Menambahkan selector yang ingin dipertahankan
    })
  ]
};
