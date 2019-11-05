"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = required;

function required(value, name, ruleValue) {
  if (ruleValue && value === undefined) {
    throw new Error("".concat(name, " missing"));
  }
}
//# sourceMappingURL=required.js.map