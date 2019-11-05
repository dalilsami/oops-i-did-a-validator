"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = values;

function values(value, name, ruleValue) {
  if (!ruleValue.includes(value)) {
    throw new Error("".concat(name, " is invalid"));
  }
}
//# sourceMappingURL=values.js.map