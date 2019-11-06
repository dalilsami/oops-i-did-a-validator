"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = patchable;

function patchable(value, name, ruleValue) {
  if (value !== undefined && !ruleValue) {
    throw new Error("".concat(name, " unpatchable"));
  }
}
//# sourceMappingURL=patchable.js.map