// Modules and Namespaces
// - Export/Import
// - Module resolution
// - Avoiding naming-conflicts

//MODULE: Old way

import logMsg from "./logger";
import { AddNums, PI } from "./math";
import { greet } from "./utils";

console.log(greet("Skyy"));
console.log(PI);
console.log(AddNums(25, 5));
logMsg("Named Export Message..✅");

//import {greet as sayHello} from './bla/bla' - avoiding naming-conflicts
