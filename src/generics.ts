// Generics - Flexible Data-Types

function logStr(data: string) {
  console.log(data);
}

function logNum(data: number) {
  console.log(data);
}

//Now, reusable modified function using GENERICs
function logData<T>(data: T): void {
  console.log(data);
}

logStr("Hello");
logNum(23);

logData(29);
logData("Some Str..");
logData(true);

type UserGeneric = {
  name: string;
  age: number;
};

logData<UserGeneric>({ name: "Skyy", age: 29 });

//Another example

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const userResponse: ApiResponse<{ name: string }> = {
  success: true,
  data: { name: "Api Resp 201!" },
};

const numberResp: ApiResponse<number> = {
  success: true,
  data: 42,
};

// Constraints: Limit the data-type that can be passed to the GENERIC fx.

function printLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

printLength("hello");
printLength(["1", "2", "3", "4"]);

// Another example
interface HasId {
  id: number;
}

function getId<T extends HasId>(item: T) {
  return item.id;
}

console.log(getId({ id: 223, title: "Product 1" }));
