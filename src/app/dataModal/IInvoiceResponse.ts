export interface IInvoiceResponse {
    WasSuccessful: string,
    FailureReasons: string[],
    TimeTaken: string,
    Environment: string,
    TimeStamp: Date,
    Result: any[]
}