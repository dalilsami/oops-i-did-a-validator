"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = comparingRule;

function comparingRule(greater, key) {
  return function (value, name, ruleValue) {
    if (greater) {
      if ((key ? value[key] : value) > ruleValue) {
        throw new Error("".concat(name).concat(key ? ".".concat(key) : "", " should be under ").concat(ruleValue, " included"));
      }
    } else {
      if ((key ? value[key] : value) < ruleValue) {
        throw new Error("".concat(name).concat(key ? ".".concat(key) : "", " should be over ").concat(ruleValue, " included"));
      }
    }
  };
}
//# sourceMappingURL=comparingRule.js.map