/// <reference path="../../typings/main.d.ts" />

/*
 * ATTENTION: This is only a stub and does not reflect the types that are actually available!
 * Methods used by StyleLounge are added as needed. DO NOT RELY ON THIS TYPINGS' ACCURACY!
 */

declare var influx:influx.Factory;

declare module influx {

    interface Factory {
        (options:any): InfluxDB;
    }

    interface Factory {
        InfluxDB: InfluxDBStatic
    }

    interface InfluxDBStatic {
        prototype: InfluxDB;
    }

    interface OptionValue {
        time: Date;
        value: number;
    }
    interface WriteOptions {
        precision?: string;//s or ms
    }

    export interface InfluxDB {
        setRequestTimeout(value):any;

        setFailoverTimeout(value):any;

        url(endpoint, options, query):any;

        queryDB(query, options, callback):void ;

        createDatabase(databaseName, callback):void;

        dropDatabase(databaseName, callback):void;

        getDatabaseNames(callback):void;

        getSeriesNames(measurementName, callback):void;

        getSeries(measurementName, callback):void;

        dropMeasurement(measurementName, callback):void;

        getUsers(callback):void;

        createUser(username, password, isAdmin, callback) ;

        setPassword(username, password, callback):void;

        grantPrivilege(privilege, databaseName, userName, callback):void;

        revokePrivilege(privilege, databaseName, userName, callback) ;

        grantAdminPrivileges(userName, callback):void;

        revokeAdminPrivileges(userName, callback):void;

        dropUser(username, callback):void;

        writeSeries(series:string, options, callback):void;
        //More types of values are allowd but at StyleLounge we stick to this
        writePoint(seriesName:string, values:OptionValue, tags, options?:WriteOptions, callback?:(err, result) => void):void;

        writePoints(seriesName:string, points, options, callback) ;

        query(databaseName, query, callback):void;

        queryRaw(databaseName, query, callback):void;

        createContinuousQuery(queryName, queryString, databaseName, callback):void;

        getContinuousQueries(callback):void;

        dropContinuousQuery(queryName, databaseName, callback):void;

        createRetentionPolicy(rpName, databaseName, duration, replication, isDefault, callback);

        getRetentionPolicies(databaseName, callback):void;

        getHostsAvailable():any;

        getHostsDisabled():any;
    }

    export interface InfluxDBAsync extends InfluxDB {

        //synchronous version should be used: setFailoverTimeoutAsync(value):Promise<any>;

        urlAsync(endpoint, options, query):any;

        queryDBAsync(query, options):Promise<any> ;

        createDatabaseAsync(databaseName):Promise<any>;

        dropDatabaseAsync(databaseName): Promise<any>;

        getDatabaseNamesAsync():Promise<any>;

        getSeriesNamesAsync(measurementName): Promise<any>;

        getSeriesAsync(measurementName): Promise<any>;

        dropMeasurementAsync(measurementName): Promise<any>;

        getUsersAsync(): Promise<any>;

        createUserAsync(username, password, isAdmin): Promise<any>;

        setPasswordAsync(username, password): Promise<any>;

        grantPrivilegeAsync(privilege, databaseName, userName): Promise<any>;

        revokePrivilegeAsync(privilege, databaseName, userName): Promise<any>;

        grantAdminPrivilegesAsync(userName): Promise<any>;

        revokeAdminPrivilegesAsync(userName): Promise<any>;

        dropUserAsync(username): Promise<any>;

        writeSeriesAsync(series: string, options): Promise<any>;

        writePointAsync(seriesName:string, values:OptionValue, tags, options?:WriteOptions): Promise<any>;

        writePointsAsync(seriesName: string, points, options): Promise<any>;

        queryAsync(databaseName, query): Promise<any>;

        queryRawAsync(databaseName, query): Promise<any>;

        createContinuousQueryAsync(queryName, queryString, databaseName): Promise<any>;

        getContinuousQueriesAsync(): Promise<any>;

        dropContinuousQueryAsync(queryName, databaseName): Promise<any>;

        createRetentionPolicyAsync(rpName, databaseName, duration, replication, isDefault): Promise<any>;

        getRetentionPoliciesAsync(databaseName): Promise<any>;

        //synchronous version should be used: getHostsAvailableAsync():any;

        //synchronous version should be used: getHostsDisabledAsync():any;
    }

}

declare module "influx" {
    export = influx;
}