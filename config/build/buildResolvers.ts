import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {

    return {
        // указывает те фалый в которых не будем указывать тип расширения при импорте
        extensions: ['.tsx', '.ts', '.js'],
    }
}