"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = match;

function match(value, name, ruleValue) {
  if (!(ruleValue instanceof RegExp ? ruleValue : new RegExp(ruleValue)).test(value)) {
    throw new Error("".concat(name, " not valid"));
  }
}
//# sourceMappingURL=match.js.map