/*---------------------------------------------------------------------------------------------------
 * Copyright (c) 2015 Maxim Gherman
 * typeioc - Dependency injection container for node typescript
 * @version v1.2.9
 * @link https://github.com/maxgherman/TypeIOC
 * @license (MIT) - https://github.com/maxgherman/TypeIOC/blob/master/LICENSE
 * --------------------------------------------------------------------------------------------------*/


declare var influx: influx.InfluxDb;

declare module influx {

    interface InfluxDB {
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

}

declare module "influx" {
    export = influx;
}