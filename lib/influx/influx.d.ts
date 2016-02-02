/// <reference path="../../typings/main.d.ts" />

declare var influx:influx.Factory;

declare module influx {

    import {Promise} from "native-or-bluebird~es6-promise/dist/es6-promise";
    
    interface Factory {
        (options:any): InfluxDB;
    }

    interface Factory {
        InfluxDB: InfluxDBStatic
    }

    interface InfluxDBStatic {
        prototype: InfluxDB;
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

        writeSeries(series, options, callback):void;

        writePoint(seriesName, values, tags, options, callback):void;

        writePoints(seriesName, points, options, callback) ;

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

    export interface InfluxDBAsync {
        setRequestTimeoutAsync(value):any;

        setFailoverTimeoutAsync(value):any;

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

        writeSeriesAsync(series, options): Promise<any>;

        writePointAsync(seriesName, values, tags, options): Promise<any>;

        writePointsAsync(seriesName, points, options): Promise<any>;

        queryAsync(databaseName, query): Promise<any>;

        queryRawAsync(databaseName, query): Promise<any>;

        createContinuousQueryAsync(queryName, queryString, databaseName): Promise<any>;

        getContinuousQueriesAsync(): Promise<any>;

        dropContinuousQueryAsync(queryName, databaseName): Promise<any>;

        createRetentionPolicyAsync(rpName, databaseName, duration, replication, isDefault): Promise<any>;

        getRetentionPoliciesAsync(databaseName): Promise<any>;

        getHostsAvailableAsync():any;

        getHostsDisabledAsync():any;
    }

}

declare module "influx" {
    export = influx;
}