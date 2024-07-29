import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        // для создание в build html исхожного файла
        new HTMLWebpackPlugin({
            // указываем шаблон создания index.html fail
            template: paths.html
        }),
        // для отоброжение прогресса при сборки проекта
        new webpack.ProgressPlugin(),
        // плагин для создания css файлов
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]
}