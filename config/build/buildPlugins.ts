import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // для создание в build html исхожного файла
    new HTMLWebpackPlugin({
      // указываем шаблон создания index.html fail
      template: paths.html,
    }),
    // для отоброжение прогресса при сборки проекта
    new webpack.ProgressPlugin(),
    // плагин для создания css файлов
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // для прокидывания переменных в приложение, также нужно добавить переменную в global.d.ts
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    // для быстрого изменнеия без перезагрузки страниц
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ];
}
