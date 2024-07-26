import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const typeScriptLoader = {
        test: /\.tsx?$/,
        // loader которые используется для обработки .ts
        use: 'ts-loader',
        // исключения что обработывать не нужно
        exclude: /node_modules/,
    }

    // порядок в которм возращаются loaders в Array имеет значение
    return [
        typeScriptLoader
    ]
}