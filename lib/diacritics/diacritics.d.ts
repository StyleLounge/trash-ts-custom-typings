/// <reference path="../../typings/main.d.ts" />

declare var diacritics:diacritics.IDiacriticsStatic;

declare module diacritics {

    interface IDiacriticsStatic {
        remove:(str:string) => string;
    }
}

declare module "diacritics" {
    export = diacritics;
}