import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }


    const cssLoader = {
        test: /\.s[ac]ss$/i,
        // exclude: /\.module\.(sa|sc|c)ss$/,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    // настрйока .module.scss / module.css
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const typeScriptLoader = {
        test: /\.tsx?$/,
        // loader которые используется для обработки .ts
        use: 'ts-loader',
        // исключения что обработывать не нужно
        exclude: /node_modules/,
    }

    const fileLoader = {
        // по необходимости можно добавить подержу расширения шрифтов "woff2|woff"
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    // порядок в которм возращаются loaders в Array имеет значение
    return [
        fileLoader,
        svgLoader,
        typeScriptLoader,
        cssLoader,
    ]

}