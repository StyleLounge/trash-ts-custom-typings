/// <reference path="../../typings/main.d.ts" />

/*
 * ATTENTION: This is only a stub and does not reflect the types that are actually available!
 * Methods used by StyleLounge are added as needed. DO NOT RELY ON THIS TYPINGS' ACCURACY!
 */

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

declare module "elasticsearch" {
    export = dotenv;
}