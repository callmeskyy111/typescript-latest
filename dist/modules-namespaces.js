"use strict";
// Modules and Namespaces
// - Export/Import
// - Module resolution
// - Avoiding naming-conflicts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const math_1 = require("./math");
const utils_1 = require("./utils");
console.log((0, utils_1.greet)("Skyy"));
console.log(math_1.PI);
console.log((0, math_1.AddNums)(25, 5));
(0, logger_1.default)('Named Export Message..✅');
