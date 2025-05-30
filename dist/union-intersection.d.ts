declare let phone: string | number;
type ProductId = string | number;
declare function getProduct(id: ProductId): void;
type User1 = {
    name: string;
};
type Admin = {
    isAdmin: boolean;
};
type AdminUser = User1 & Admin;
declare const admin: AdminUser;
