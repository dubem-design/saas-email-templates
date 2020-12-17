"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mjmlReact = require("mjml-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Head(_ref) {
  var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4;

  var data = _ref.data,
      config = _ref.config;
  return /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlHead, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlTitle, null, data.title), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlPreview, null, data.preview), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlStyle, null, data.css), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlFont, {
    name: "DM Sans",
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlAttributes, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlClass, {
    name: "text-h1",
    "font-size": "28px",
    "font-weight": "700",
    display: "block"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlClass, {
    name: "text-h2",
    "font-size": "20px",
    "font-weight": "700",
    display: "block"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlClass, {
    name: "text-h3",
    "font-size": "16px",
    "font-weight": "700",
    display: "block"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlClass, {
    name: "text-small",
    "font-size": "14px",
    display: "block"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlClass, (_React$createElement = {
    name: "btn",
    color: "#ffffff",
    "background-color": "#2196F3",
    align: "left"
  }, _defineProperty(_React$createElement, "color", "#ffffff"), _defineProperty(_React$createElement, "border-radius", "4px"), _defineProperty(_React$createElement, "font-size", "17px"), _defineProperty(_React$createElement, "display", "inline"), _React$createElement)), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlClass, (_React$createElement2 = {
    name: "btn-primary",
    color: "#ffffff",
    align: "left"
  }, _defineProperty(_React$createElement2, "color", "#ffffff"), _defineProperty(_React$createElement2, "border-radius", "4px"), _defineProperty(_React$createElement2, "font-size", "17px"), _defineProperty(_React$createElement2, "display", "inline"), _React$createElement2)), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlClass, (_React$createElement3 = {
    name: "btn-success",
    color: "#ffffff",
    "background-color": "#8CCE39",
    align: "left"
  }, _defineProperty(_React$createElement3, "color", "#ffffff"), _defineProperty(_React$createElement3, "border-radius", "4px"), _defineProperty(_React$createElement3, "font-size", "17px"), _defineProperty(_React$createElement3, "display", "inline"), _React$createElement3)), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlClass, (_React$createElement4 = {
    name: "btn-danger",
    color: "#ffffff",
    "background-color": "#D34037",
    align: "left"
  }, _defineProperty(_React$createElement4, "color", "#ffffff"), _defineProperty(_React$createElement4, "border-radius", "4px"), _defineProperty(_React$createElement4, "font-size", "17px"), _defineProperty(_React$createElement4, "display", "inline"), _React$createElement4)), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlClass, {
    name: "link",
    color: "#2196F3",
    "font-size": "16px"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlAll, {
    "font-family": "DM Sans",
    "line-height": "1.5",
    "font-size": "16px"
  })));
}

var _default = Head;
exports["default"] = _default;