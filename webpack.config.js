const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
// const pug = require('pug');
// const globImporter = require('node-sass-glob-importer');

let contPlugin = [];
let page;

//pug файлы генерируемые в html
fs.readdirSync('./src/').forEach(files => {

  if (String(files).endsWith('.pug')) {
    page = new HtmlWebpackPlugin({
      template: `./src/${files}`,
      filename: `./${path.basename(files, '.pug')}.html`,
      inject: 'body',
      minify: false,
      hash: false
    });
    contPlugin.push(page);
  }

});


let config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },

  devServer: {
    host: 'localhost',
    port: 3001,
    overlay: {
      warnings: true,
      errors: true
    },
    open: true
  },

  devtool: false,

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          // {
          //   loader: 'html-loader-srcset',
          //   options: {
          //     attrs: [
                // 'img:src',
                // 'source:srcset',
                // 'link:href',
                // 'image:xlink:href',
          //     ],
          //   },
          // },
          {
            loader: "html-loader?minimize=false"
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true
            }
          }
        ]
      },

      {
        test: /\.js$/,
        exclude: /node_modules[\/\\](?!(swiper|dom7)[\/\\])/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: '2.x'
                },
              ],
            ],
          },
        },
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              // config: { path: `./postcss.config.js` }
              postcssOptions: {
                plugins: [
                  [
                    autoprefixer({
                      browsers:['defaults', 'ie >= 11', 'last 8 versions']
                    })
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // importer: globImporter(),
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /icons/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                return 'images/[name].[ext]';
              },
            },
          },
        ],
      },
      {
        test: /\.(webp)$/,
        exclude: /icons/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                return 'images/[name].webp';
              },
            },
          },
          {
            loader: 'webp-loader?{quality:100, method:0}',
          },
        ],
      },

      {
        test: /\.(eot|ttf|woff|woff2|)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                return 'fonts/[name].[ext]';
              },
            },
          },
        ],
      },

      {
        test: /\.svg$/,
        include: /icons/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {symbolId: filePath => path.basename(filePath, '.svg')},
          },
          'svg-fill-loader',
          'svgo-loader',
        ],
      },

      {
        test: /\.(json)$/,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      },

    ]
  },

  plugins: contPlugin
}

contPlugin.push(
  //очистка папки dist сборкой
  new CleanWebpackPlugin(),

  //отвечает за css
  new MiniCssExtractPlugin({
    filename: "css/[name].css"
  }),

  //отвечает за копирование не компилируемых файлов в продакшен
  new CopyWebpackPlugin({
    patterns: [
      {
        from: './src/public',
        to: './'
      }
    ]
  }),

  //подключение jquery в проект
  // new webpack.ProvidePlugin({
  //   $: 'jquery',
  //   jQuery: 'jquery',
  //   'window.jQuery': 'jquery',
  //   // 'window.$': 'jquery'
  // })
);

//Плагины срабатывающие по триггерам режима сборки prod и dev
module.exports = (env, argv) => {
  //Плагин карты стилей
  if (argv.mode === 'development') {
    contPlugin.push(new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }));
  }
  //Плагин оптимизации изображений
  if (argv.mode === 'production') {
    contPlugin.push(new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['mozjpeg', { quality: 85 }],
          ['pngquant', { optimizationLevel: 6 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }));
  }

  return config;
}
