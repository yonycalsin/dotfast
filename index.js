"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotfast = function (obj, path, defaultVal) {
    var names;
    names = path.split('.').reverse();
    while (names.length && obj !== undefined && obj !== null) {
        obj = obj[names.pop()];
    }
    return obj || defaultVal;
};
exports.dtf = dotfast;
exports.dotfast = dotfast;
exports.default = dotfast;
