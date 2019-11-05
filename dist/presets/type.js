"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = type;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function type(value, name, ruleValue) {
  var isString = typeof ruleValue === "string";

  if (isString ? _typeof(value) !== ruleValue : !(value instanceof ruleValue)) {
    throw new Error("".concat(name, " is not ").concat(isString ? ruleValue : ruleValue.name));
  }
}
//# sourceMappingURL=type.js.map