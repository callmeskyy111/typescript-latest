//basic
function getItem<T>(item: T): T {
  console.log("Item is:", item);
  return item;
}

getItem("Hi");
getItem(29);
getItem([1, 2, 3, 4, 5]);
//More specific
getItem<number>(69);
getItem<string>("Hello");
getItem<Array<number>>([6, 7, 8]);

//Narrowing down
function getItemConstraint<T extends string | number | boolean>(item: T): T {
  console.log("Narrowed Item is:", item);
  return item;
}
getItemConstraint(true);

//Real world example
interface User {
  id: string;
  name: string;
}

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

async function getUsers() {
  const resp = await fetch("https://jasonplaceholder.typicode.com/users");
  const data = await resp.json();
  return data;
}

async function getTodos() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await resp.json();
  return data;
}

//fix
async function getUsersTyped(): Promise<User[]> {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await resp.json();
  return data;
}

//Modified - Single function

async function fetchData<T>(url: string): Promise<T[]> {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
}

const fetchedUsers = fetchData<User>(
  "https://jsonplaceholder.typicode.com/users"
);
const fetchedTodos = fetchData<Todo>(
  "https://jsonplaceholder.typicode.com/todos"
);

//Another real-world example
function pair<K extends string, V extends number>(key: K, value: V): [K, V] {
  return [key, value]; //Tuple
}

const pair1 = pair("Hello", 100);
