// Union (|) and Intersection (?) types..

// Union Types
//let phone = "wifi" | "mobile-data";
let phone: string | number;

type ProductId = string | number;

function getProduct(id: ProductId) {
  console.log(`Fetching product with ID: #${id}`);
}

getProduct("123");
getProduct(456);

// Intersection types - combining multiple types into one

type User1 = {
  name: string;
};

type Admin = {
  isAdmin: boolean;
};

type AdminUser = User1 & Admin;

const admin: AdminUser = {
  name: "admin1",
  isAdmin: true,
};
