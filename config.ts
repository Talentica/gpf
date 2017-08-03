export class Config {
    public static DbConnection: string = "mongodb://abcd1234:abcd1234@ds028310.mlab.com:28310/gpf";
    // public static DbConnection: string = "mongodb://localhost:27017/gpf";
    public static basePath: string = "data";
    public static apiversion: string = "v1";

    public static ElasticSearchConnection : string  = "http://localhost:9200";
    public static ApplyElasticSearch : boolean = false; 
    public static ignorePaths = [];
    public static isMultiThreaded = true; // This param is for configuring multi process using worker/ process control attribute..
    public static worker = 'worker.js';
    public static process = 1;
}

export class SqlConfig {

    public static isSqlEnabled: boolean = false;
    public static database: string = "test";
    public static username: string = "sa";
    public static password: string = "Apr@2016";

    public static sequlizeSetting: any = {
        host: '172.19.101.120',
        dialect: 'mssql',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }

        // SQLite only
        //storage: 'path/to/database.sqlite'
    };
   
}

export class Security {
    public static isAutheticationEnabled = "disabled";//allowed values: "disabled","enabledWithoutAuthorization","enabledWithAuthorization"
    public static authenticationType = "TokenBased";//allowed values: "passwordBased","TokenBased"
    public static useFaceBookAuth = false;
}