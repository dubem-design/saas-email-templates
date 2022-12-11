"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mjmlReact = require("mjml-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Hero(_ref) {
  var data = _ref.data,
      config = _ref.config;
  return /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSection, {
    "background-color": "#000000",
    "background-repeat": "no-repeat",
    "text-align": "center",
    padding: "0 0 0 0"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlImage, {
    align: "center",
    border: "none",
    "padding-bottom": "0px",
    "padding-left": "0px",
    "padding-right": "0px",
    padding: "0px 25px",
    src: "http://5vph.mj.am/img/5vph/b/1g86w/0696u.jpeg",
    target: "_blank",
    title: "",
    width: "780px"
  })));
}

var _default = Hero;
exports["default"] = _default;