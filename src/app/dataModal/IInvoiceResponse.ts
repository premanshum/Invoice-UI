export interface IInvoiceResponse {
    WasSuccessful: string,
    FailureReasons: string[],
    Result: any[],
    TimeTaken: Date,
    Environment: string
}