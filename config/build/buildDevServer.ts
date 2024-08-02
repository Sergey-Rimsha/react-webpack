import {BuildOptions} from "./types/config";

import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {

    return {
        // для открытия на указанном порту
        port: options.port,
        // для автоматического открытия браузера
        open: true,
        // для правильной обработки роутинга при перезагрузки странциы
        historyApiFallback: true,
        // для работы react-refresh-webpack-plugin
        hot: true,
    }
}