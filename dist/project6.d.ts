interface ApiResp<T> {
    success: boolean;
    data: T;
}
declare function HandleApiResponse<T>(response: ApiResp<T>): void;
declare const blogP: void;
