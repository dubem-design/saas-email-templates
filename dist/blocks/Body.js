"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mjmlReact = require("mjml-react");

var _ExecutiveMessage = _interopRequireDefault(require("./ExecutiveMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Body(_ref) {
  var data = _ref.data,
      config = _ref.config;
  return /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlWrapper, {
    padding: "0px",
    "padding-bottom": "0"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSection, {
    "border-radius": "0px 0px 8px 8px",
    "background-color": "#ffffff"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, {
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    "mj-class": "text-h2"
  }, "Hi, there"), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, null, "Hello there, You are getting this email because you signup to our survey of as a result of a follow up from one of our team memberes. Which evere way we would like you to help us fill this survey as we seek to learn more on the problem of real estate sight inspection."), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlButton, {
    "background-color": "#21AA64",
    "mj-class": "btn-primary"
  }, "Fill Survey")), /*#__PURE__*/_react["default"].createElement(_ExecutiveMessage["default"], null)));
}

var _default = Body;
exports["default"] = _default;