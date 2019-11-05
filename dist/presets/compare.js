"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxValue = exports.minValue = exports.maxLength = exports.minLength = void 0;

var _comparingRule = _interopRequireDefault(require("../utils/comparingRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var minLength = (0, _comparingRule["default"])(false, "length");
exports.minLength = minLength;
var maxLength = (0, _comparingRule["default"])(true, "length");
exports.maxLength = maxLength;
var minValue = (0, _comparingRule["default"])(false);
exports.minValue = minValue;
var maxValue = (0, _comparingRule["default"])(true);
exports.maxValue = maxValue;
//# sourceMappingURL=compare.js.map