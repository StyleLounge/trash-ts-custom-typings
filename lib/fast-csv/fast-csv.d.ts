/*
 * ATTENTION: This is only a stub and does not reflect the types that are actually available!
 * Methods used by StyleLounge are added as needed. DO NOT RELY ON THIS TYPINGS' ACCURACY!
 */


declare var fastCsv: any;

declare module "fast-csv" {

    import * as stream from "stream";

    function fromString(string: string, options?: IParseOptions): stream.Readable;
    function fromPath(path: string, options?: IParseOptions): stream.Readable;


    interface IParseOptions {
        /**
         * Ensure that data events have an object emitted rather than the stringified version set to false to have a stringified buffer.
         * Defaults to true
         */
        objectMode?: boolean;

        /**
         * Set to true if you expect the first line of your CSV to contain headers, alternatly you can specify an array of headers to use. You can also specify a sparse array to omit some of the columns.
         * Defaults to false
         */
        headers?: boolean;

        /**
         * If you wish to ignore empty rows.
         * Defaults to false
         */
        ignoreEmpty?: boolean;

        /**
         * If you want to discard columns that do not map to a header.
         * Defaults to false
         */
        discardUnmappedColumns?: boolean

        /**
         * If you want to consider empty lines/lines with too few fields as errors - Only to be used with headers=true
         * Defaults to false
         */
        strictColumnHandling?: boolean;

        /**
         * If your data uses an alternate delimiter such as ; or \t.
         * NOTE When specifying an alternate delimiter you may only pass in a single character delimiter
         * quote='"': The character to use to escape values that contain a delimiter. If you set to null then all quoting will be ignored
         * Defaults to ','
         */
        delimiter?: string;

        /**
         * The character to use when escaping a value that is quoted and contains a quote character.
         * i.e: 'First,"Name"' => '"First,""name"""'
         * The following are options for parsing only.
         * Defaults to '"'
         */
        escape?: string;

        /**
         * If you want to trim all values parsed set to true.
         * Defaults to false
         */
        trim?: boolean;

        /**
         * If you want to right trim all values parsed set to true.
         * Defaults to false
         */
        rtrim?: boolean;

        /**
         * If you want to left trim all values parsed set to true.
         * Defaults to false
         */
        ltrim?: boolean;

        /**
         * If your CSV contains comments you can use this option to ignore lines that begin with the specified character (e.g. #).
         * Defaults to false
         */
        comment?: boolean;
    }

    export = fastCsv;
}