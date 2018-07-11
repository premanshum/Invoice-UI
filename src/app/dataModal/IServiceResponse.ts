export interface IServiceResponse {
    WasSuccessful: string,
    FailureReasons: string[],
    TimeTaken: string,
    Environment: string,
    TimeStamp: Date,
    Result: any[]
}