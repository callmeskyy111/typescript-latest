declare function logStr(data: string): void;
declare function logNum(data: number): void;
declare function logData<T>(data: T): void;
type UserGeneric = {
    name: string;
    age: number;
};
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
declare const userResponse: ApiResponse<{
    name: string;
}>;
declare const numberResp: ApiResponse<number>;
declare function printLength<T extends {
    length: number;
}>(item: T): void;
interface HasId {
    id: number;
}
declare function getId<T extends HasId>(item: T): number;
