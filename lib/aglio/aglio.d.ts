/// <reference path="../../typings/main.d.ts" />

/*
 * ATTENTION: This is only a stub and does not reflect the types that are actually available!
 * Methods used by StyleLounge are added as needed. DO NOT RELY ON THIS TYPINGS' ACCURACY!
 */


declare var aglio:IAglioStatic;

interface IAglioStatic {
    render (input:string, options:any, callback:(error: Error, html: string, warnings: any) => void):void;
    renderFile (input:string, output:string, options:any, callback:(error: Error, warnings: any) => void):void;
}

declare module "aglio" {
    export = aglio;
}