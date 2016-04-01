/// <reference path="../../typings/main.d.ts" />

/*
 * ATTENTION: This is only a stub and does not reflect the types that are actually available!
 * Methods used by StyleLounge are added as needed. DO NOT RELY ON THIS TYPINGS' ACCURACY!
 */

declare var diacritics:diacritics.IDiacriticsStatic;

declare module diacritics {

    interface IDiacriticsStatic {
        remove:(str:string) => string;
    }
}

declare module "diacritics" {
    export = diacritics;
}