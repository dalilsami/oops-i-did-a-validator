"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var presets = _interopRequireWildcard(require("./presets"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Oops =
/*#__PURE__*/
function () {
  function Oops(_ref) {
    var rules = _ref.rules;

    _classCallCheck(this, Oops);

    if (!rules || (typeof additionnalRules === "undefined" ? "undefined" : _typeof(additionnalRules)) !== "object") {
      rules = {};
    }

    this.rules = _objectSpread({}, rules, {}, presets);
  }

  _createClass(Oops, [{
    key: "checkRules",
    value: function checkRules(rules) {
      var _this = this;

      Object.keys(rules).forEach(function (rule) {
        if (!(rule in _this.rules)) {
          throw new Error("".concat(rule, " is not an existing rule"));
        }
      });
    }
  }, {
    key: "check",
    value: function check(elem) {
      var _this2 = this;

      var scheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

      if (_typeof(elem) !== "object") {
        throw new Error("Parameter is not an object !");
      }

      Object.entries(scheme).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            field = _ref3[0],
            rules = _ref3[1];

        _this2.checkRules(rules);

        _this2.validate(elem[field], name ? "".concat(name, ".").concat(field) : field, rules);
      });
    }
  }, {
    key: "validate",
    value: function validate(value) {
      var _this3 = this;

      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.rules.required(value, name, rules.required);

      if (value === undefined) {
        return;
      }

      Object.entries(rules).forEach(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            ruleName = _ref5[0],
            ruleValue = _ref5[1];

        return _this3.rules[ruleName](value, name, ruleValue, _this3);
      });
    }
  }]);

  return Oops;
}();

exports["default"] = Oops;
//# sourceMappingURL=oops.js.map