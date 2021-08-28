"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectDropDownTabSeperator = exports.SelectDropDownTabSectionField = exports.SelectDropDownTabSection = exports.SelectDropDownTab = exports.SelectDropDownList = exports.SelectDropDown = exports.SelectHeaderInputIcon = exports.SelectHeaderInput = exports.SelectHeader = exports.SelectWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../utils");
exports.SelectWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n"], ["\n  width: 100%;\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n"])));
exports.SelectHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"])));
exports.SelectHeaderInput = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  padding: 15px 15px;\n  background-color: white;\n  border-radius: 8px;\n  border: none;\n  width: 100%;\n  font-family: \"Poppins\";\n  border: 2px solid #f5f5f5;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    border: 2px solid rgb(168, 194, 240);\n  }\n\n  &:focus {\n    outline: none;\n    border: 2px solid rgb(136, 173, 238);\n  }\n"], ["\n  position: relative;\n  padding: 15px 15px;\n  background-color: white;\n  border-radius: 8px;\n  border: none;\n  width: 100%;\n  font-family: \"Poppins\";\n  border: 2px solid #f5f5f5;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    border: 2px solid rgb(168, 194, 240);\n  }\n\n  &:focus {\n    outline: none;\n    border: 2px solid rgb(136, 173, 238);\n  }\n"])));
exports.SelectHeaderInputIcon = styled_components_1.default.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  bottom: 17px;\n"], ["\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  bottom: 17px;\n"])));
exports.SelectDropDown = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n  background-color: white;\n  border: 2px solid #f1f1f1;\n  border-radius: 4px;\n  padding: 5px 10px;\n  margin-top: 5px;\n  max-height: 300px;\n  overflow: auto;\n\n  transform-origin: top;\n\n  ", ";\n\n  ", ";\n\n  &::-webkit-scrollbar {\n    width: 2px;\n    height: 80%;\n    margin-right: 5px;\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n  background-color: white;\n  border: 2px solid #f1f1f1;\n  border-radius: 4px;\n  padding: 5px 10px;\n  margin-top: 5px;\n  max-height: 300px;\n  overflow: auto;\n\n  transform-origin: top;\n\n  ", ";\n\n  ", ";\n\n  &::-webkit-scrollbar {\n    width: 2px;\n    height: 80%;\n    margin-right: 5px;\n  }\n"])), function (props) {
    if (props.visible === true) {
        return "transform: scaleY(1.00) !important; opacity: 1 !important; z-index: 1001 !important;";
    }
    else {
        return "transform: scaleY(0.00) !important; padding: 0px 0px !important; opacity: 0 !important; z-index: -1 !important;";
    }
}, utils_1.smoothTransition);
exports.SelectDropDownList = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])));
exports.SelectDropDownTab = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  padding: 10px 20px;\n\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"], ["\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  padding: 10px 20px;\n\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"])));
exports.SelectDropDownTabSection = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    if (props.type === "left") {
        return "width: 100%; display: flex; flex-direction: column; justify-content: flex-start; align-item: flex-start;";
    }
    else if (props.type === "right") {
        return "max-height: 100%; max-width: 70px; display: flex; justify-content: center; align-item: center; padding: 10px 10px;";
    }
    else {
        return "width: 100%; display: flex; flex-direction: column; justify-content: flex-start; align-item: flex-start;";
    }
});
exports.SelectDropDownTabSectionField = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  text-align: start;\n  ", "\n"], ["\n  text-align: start;\n  ", "\n"])), function (props) {
    if (props.type === "primary") {
        return 'margin-bottom: 5px; font-family: "Quicksand"; font-size: 15px; font-weight: 600; color: black !important;';
    }
    else if (props.type === "secondary") {
        return 'margin-top: 0px !important; font-family: "Poppins"; font-size: 11px; font-weight: 500; color: rgb(163,163,163) !important;';
    }
    else if (props.type === "notfound") {
        return 'margin-bottom: 5px; font-family: "Quicksand"; font-size: 12px; font-weight: 600; color: rgb(163,163,163) !important; width: 100%; display: flex; justify-content: center; align-item: center';
    }
    else {
        return 'margin-bottom: 5px; font-family: "Quicksand"; font-size: 15px; font-weight: 600; color: black !important;';
    }
});
exports.SelectDropDownTabSeperator = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-size: 20px;\n  font-family: \"Quicksand\";\n  font-weight: 600;\n  border-bottom: 2px solid #f5f5f5;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"], ["\n  font-size: 20px;\n  font-family: \"Quicksand\";\n  font-weight: 600;\n  border-bottom: 2px solid #f5f5f5;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
