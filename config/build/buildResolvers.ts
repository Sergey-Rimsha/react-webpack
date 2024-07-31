import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {

    return {
        // указывает те фалый в которых не будем указывать тип расширения при импорте
        extensions: ['.tsx', '.ts', '.js'],
        // указываем для приоритета абсолютых путей
        preferAbsolute: true,
        // добавляем alias
        // в modules указывает путь до папка 'src', 'node_modules'
        modules: [options.paths.src, 'node_modules'],
        // если указываем то для каждого модуля 'index' будет являтся главным
        mainFiles: ['index'],
        // указываем alisa если {} то обращение происходит на прямую
        alias: {}
    }
}