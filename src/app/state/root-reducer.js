"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const uiReduce = require("./ui/ui-reducer");
const ottReduce = require("./ott-program/ott-prog-reducer");
exports.default = redux_1.combineReducers(Object.assign({}, uiReduce, ottReduce));
__export(require("./ui/ui-reducer"));
__export(require("./ott-program/ott-prog-reducer"));
