const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Для работы с HTML-шаблонами

module.exports = {
  // Режим сборки (можно использовать 'development' или 'production')
  mode: 'development',

  // Входная точка - файл, с которого Webpack начнет сборку
  entry: './src/index.js', // Укажите путь к вашему основному файлу

  // Выходная точка - куда Webpack соберет ваш проект
  output: {
    filename: 'bundle.js', // Имя итогового файла
    path: path.resolve(__dirname, 'dist'), // Папка для итоговых файлов
  },

  // Загрузчики и плагины
  module: {
    rules: [
      {
        test: /\.js$/, // Применяем Babel к всем файлам с расширением .js
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Поддержка ES6+
          },
        },
      },
      {
        test: /\.css$/, // Применяем для всех файлов с расширением .css
        use: ['style-loader', 'css-loader'], // Подключаем CSS
      },
      {
        test: /\.(png|jpg|gif)$/i, // Для работы с изображениями
        type: 'asset/resource',
      },
    ],
  },

  // Плагины
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
    }),
  ],

  // Конфигурация для серверов разработки (необязательно)
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'dist'), // Папка для отдачи статического контента
  //   port: 3000, // Порт для разработки
  // },
};
