"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mjmlReact = require("mjml-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var avatarStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50px",
  backgroundColor: "#000"
};

function Body(_ref) {
  var data = _ref.data,
      config = _ref.config;
  return /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, {
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSection, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, {
    width: "50px"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlButton, {
    width: "50px",
    height: "50px",
    "border-radius": "25px",
    align: "left"
  })), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, {
    width: "50px"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlButton, {
    width: "50px",
    height: "50px",
    "border-radius": "25px",
    align: "left"
  }))), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    "mj-class": "text-h2"
  }, "Hi, there"));
}

var _default = Body;
exports["default"] = _default;