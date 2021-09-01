var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { smoothTransition } from "../utils";
export var SelectWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n"], ["\n  width: 100%;\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n"])));
export var SelectHeader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"])));
export var SelectHeaderInput = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  padding: 15px 15px;\n  background-color: white;\n  border-radius: 4px;\n  border: none;\n  width: 100%;\n  font-family: \"Poppins\";\n  border: 2.2px solid #f5f5f5;\n  background-color: #f5f5f5;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    border: 2.2px solid #000000;\n  }\n\n  &:focus {\n    outline: none;\n    border: 2.2px solid #000000;\n  }\n"], ["\n  position: relative;\n  padding: 15px 15px;\n  background-color: white;\n  border-radius: 4px;\n  border: none;\n  width: 100%;\n  font-family: \"Poppins\";\n  border: 2.2px solid #f5f5f5;\n  background-color: #f5f5f5;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    border: 2.2px solid #000000;\n  }\n\n  &:focus {\n    outline: none;\n    border: 2.2px solid #000000;\n  }\n"])));
export var SelectHeaderInputIcon = styled.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  bottom: 17px;\n"], ["\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  bottom: 17px;\n"])));
export var SelectDropDown = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  width: 90%;\n  max-width: 100%;\n  background-color: white;\n  border-radius: 8px;\n  padding: 5px 10px;\n  margin-top: 10px;\n  max-height: 300px;\n  overflow: auto;\n\n  border: 0.5px solid #F5F5F5;\n  box-shadow: 0px 16px 40px rgba(213, 213, 213, 0.25);\n\n  transform-origin: top;\n\n  ", ";\n\n  /* inital css */\n  opacity: 0;\n  transform: scaleY(0);\n  z-index: -1;\n  padding: 0px 0px;\n\n  &::-webkit-scrollbar {\n    width: 0px;\n    height: 80%;\n    margin-right: 0px;\n  }\n"], ["\n  position: absolute;\n  width: 90%;\n  max-width: 100%;\n  background-color: white;\n  border-radius: 8px;\n  padding: 5px 10px;\n  margin-top: 10px;\n  max-height: 300px;\n  overflow: auto;\n\n  border: 0.5px solid #F5F5F5;\n  box-shadow: 0px 16px 40px rgba(213, 213, 213, 0.25);\n\n  transform-origin: top;\n\n  ", ";\n\n  /* inital css */\n  opacity: 0;\n  transform: scaleY(0);\n  z-index: -1;\n  padding: 0px 0px;\n\n  &::-webkit-scrollbar {\n    width: 0px;\n    height: 80%;\n    margin-right: 0px;\n  }\n"])), smoothTransition);
// ${(props: ThemedStyledProps<SelectDropDownInterface, any>) => {
//   if (props.visible === true) {
//     return "transform: scaleY(1.00) !important; opacity: 1 !important; z-index: 1001 !important;";
//   } else {
//     return "transform: scaleY(0.00) !important; padding: 0px 0px !important; opacity: 0 !important; z-index: -1 !important;";
//   }
// }};
export var SelectDropDownList = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])));
export var SelectDropDownTab = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  cursor: pointer;\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  padding: 10px 20px;\n\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"], ["\n  cursor: pointer;\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  padding: 10px 20px;\n\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"])));
export var SelectDropDownTabSection = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
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
export var SelectDropDownTabSectionField = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  text-align: start;\n  ", "\n"], ["\n  text-align: start;\n  ", "\n"])), function (props) {
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
export var SelectDropDownTabSeperator = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-size: 20px;\n  font-family: \"Quicksand\";\n  font-weight: 600;\n  border-bottom: 2px solid #f5f5f5;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"], ["\n  font-size: 20px;\n  font-family: \"Quicksand\";\n  font-weight: 600;\n  border-bottom: 2px solid #f5f5f5;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
