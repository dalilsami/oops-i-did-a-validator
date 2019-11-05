"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = item;

function item(value, name, ruleValue, instance) {
  value.forEach(function (d, i) {
    instance.validate(value[i], "".concat(name, ".").concat(i), ruleValue);
  });
}
//# sourceMappingURL=item.js.map