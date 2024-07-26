import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {


    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
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

    // порядок в которм возращаются loaders в Array имеет значение
    return [
        typeScriptLoader,
        cssLoader,
    ]
}