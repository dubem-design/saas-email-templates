"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mjmlReact = require("mjml-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Todos() {
  return /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlHead, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlTitle, null, "Last Minute Offer"), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlPreview, null, "Last Minute Offer..."), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlStyle, null, "\n      .blue-column {\n        background-color: blue;\n      }\n    "), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlStyle, {
    inline: true
  }, "\n      .red-column {\n        background-color: red;\n      }\n    "));
}

var _default = Todos;
exports["default"] = _default;