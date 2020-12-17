"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = void 0;

var _react = _interopRequireDefault(require("react"));

var _fs = require("fs");

var _mjmlReact = require("mjml-react");

var _Head = _interopRequireDefault(require("../../blocks/Head"));

var _Header = _interopRequireDefault(require("../../blocks/Header"));

var _Hero = _interopRequireDefault(require("../../blocks/Hero"));

var _Body = _interopRequireDefault(require("../../blocks/Body"));

var _Footer = _interopRequireDefault(require("../../blocks/Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const css = readFileSync("./assets/styles.css").toString();
var generate = function generate(data, config) {
  return /*#__PURE__*/_react["default"].createElement(_mjmlReact.Mjml, null, /*#__PURE__*/_react["default"].createElement(_Head["default"], {
    data: data
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlBody, {
    width: 500,
    backgroundColor: config.bgColor
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement(_Hero["default"], null), /*#__PURE__*/_react["default"].createElement(_Body["default"], null), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null)));
};

exports.generate = generate;