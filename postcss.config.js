// postcss.config.js
module.exports = {
    plugins: [
      require('@fullhuman/postcss-purgecss')({
        content: [
          './docs/**/*.md',            // Periksa file markdown untuk melihat CSS yang digunakan
          './docs/.vuepress/**/*.{js,vue,html}'  // Periksa semua file Vue dan JS
        ],
        safelist: []  // Menambahkan selector yang ingin dipertahankan
      })
    ]
  }
  