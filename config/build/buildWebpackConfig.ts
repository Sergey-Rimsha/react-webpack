import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    // mode - режим сборки приложения 'development' | 'production'
    mode,
    // entry точка входа приложения "главный файл"
    entry: paths.entry,
    // output точка выхода "итоговая сборка"
    output: {
      // название основного файла, [name].[contenthash].js уникальный hash
      filename: '[name].[contenthash].js',
      path: paths.build,
      // clean для очищение старых файлов про сборке
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      /*
            rules - здесь конфигурируем Лоадеры они нужны для обрабтки
            фалов которые которые выходят за рамки .js (.ts, .png, .gp, .scss)
             */
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
