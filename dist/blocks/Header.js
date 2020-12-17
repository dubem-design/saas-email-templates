"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mjmlReact = require("mjml-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Header(_ref) {
  var data = _ref.data,
      config = _ref.config;
  return /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSection, {
    "padding-bottom": "0px",
    "background-color": "#ffffff",
    "background-size": "cover",
    "background-repeat": "no-repeat",
    "padding-top": "20px",
    "css-class": "body-section",
    "border-radius": "8px 8px 0px 0px"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlImage, {
    src: "https://s3.eu-west-3.amazonaws.com/dubem.design/resources/sat-logo.png",
    alt: "SAT Logo",
    height: "35px",
    width: "85px"
  })));
}

var _default = Header;
exports["default"] = _default;