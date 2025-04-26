// webpack.config.js
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,  // Mengaktifkan minifikasi
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Menghapus console.log dari production build
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    // Menambahkan plugin CompressionPlugin untuk kompresi gzip
    new CompressionPlugin({
      test: /\.(js|css|html|json)$/,  // File yang akan dikompresi
      algorithm: 'gzip',              // Menggunakan gzip untuk kompresi
      threshold: 10240,               // Ukuran file minimum yang akan dikompresi (10KB)
      minRatio: 0.8,                  // Rasio kompresi minimum
    }),
  ],
};
