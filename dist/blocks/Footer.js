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
  return /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlWrapper, {
    padding: "0px",
    "padding-bottom": "0"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSection, {
    "border-radius": "0px 0px 8px 8px"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, {
    width: "65%"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlImage, {
    src: "https://s3.eu-west-3.amazonaws.com/dubem.design/resources/sat-logo.png",
    alt: "SAT Logo",
    height: "25px",
    align: "left",
    width: "75px"
  })), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, {
    width: "35%"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSocial, {
    "font-size": "15px",
    "icon-size": "25px",
    mode: "horizontal",
    align: "right"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSocialElement, {
    name: "facebook",
    href: "https://mjml.io/"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSocialElement, {
    name: "twitter",
    href: "https://mjml.io/"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSocialElement, {
    name: "linkedin",
    href: "https://mjml.io/"
  }))), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, {
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    "mj-class": "text-small",
    color: "#8c8c8c"
  }, "@ 2020 Logo. All rights reserved"))));
}

var _default = Hero;
exports["default"] = _default;