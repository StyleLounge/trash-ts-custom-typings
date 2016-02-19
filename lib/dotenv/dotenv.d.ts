/// <reference path="../../typings/main.d.ts" />

declare var dotenv:dotenv.IDotEnvStatic;

declare module dotenv {

    interface IConfigOptions {
        encoding?: string;
        silent?: boolean;
        path?: string;
    }
    interface IDotEnvStatic {
        config(options?:IConfigOptions): any;
        parse(buffer:any) : any;
    }
}

declare module "dotenv" {
    export = dotenv;
}