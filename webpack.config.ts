import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config: webpack.Configuration = {
	// mode - режим сборки приложения 'development' | 'production'
	mode: 'development',
	// entry точка входа приложения "главный файл"
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	// output точка выхода "итоговая сборка"
	output: {
		// название основного файла, [name].[contenthash].js уникальный hash
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, 'dist'),
		// clean для очищение старых файлов про сборке
		clean: true,
	},
	plugins: [
		// для создание в build html исхожного файла
		new HTMLWebpackPlugin({
			// указываем шаблон создания index.html fail
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		// для отоброжение прогресса при сборки проекта
		new webpack.ProgressPlugin(),
	],
	module: {
		/*
		rules - здесь конфигурируем Лоадеры они нужны для обрабтки
		фалов которые которые выходят за рамки .js (.ts, .png, .gp, .scss)
		 */
		rules: [
			{
				test: /\.tsx?$/,
				// loader которые используется для обработки .ts
				use: 'ts-loader',
				// исключения что обработывать не нужно
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
        // указывает те фалый в которых не будем указывать тип расширения при импорте
		extensions: ['.tsx', '.ts', '.js'],
	},
}

export default config;