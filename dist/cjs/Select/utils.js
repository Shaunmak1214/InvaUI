"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownListRenderer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
/* =============== Dropdown List Renderer Imports =============== */
var styled_1 = require("./styled");
var DropdownListRenderer = function (_a) {
    var filteredData = _a.filteredData, handleSelect = _a.handleSelect;
    if (filteredData && filteredData.length > 0) {
        return ((0, jsx_runtime_1.jsx)(styled_1.SelectDropDownList, { children: filteredData.map(function (data, id) { return ((0, jsx_runtime_1.jsxs)(styled_1.SelectDropDownTab, __assign({ onClick: function () { return handleSelect(data.primary); }, "data-value": data.primary }, { children: [(0, jsx_runtime_1.jsxs)(styled_1.SelectDropDownTabSection, __assign({ type: "left" }, { children: [(0, jsx_runtime_1.jsx)(styled_1.SelectDropDownTabSectionField, __assign({ type: "primary" }, { children: data.primary }), void 0), data.secondary.map(function (data, idx) { return ((0, jsx_runtime_1.jsx)(styled_1.SelectDropDownTabSectionField, __assign({ type: "secondary" }, { children: data }), idx)); })] }), void 0), data.thumbnailSrc && ((0, jsx_runtime_1.jsx)(styled_1.SelectDropDownTabSection, __assign({ type: "right" }, { children: (0, jsx_runtime_1.jsx)("img", { style: { height: "auto", width: "100%", maxWidth: "40px" }, src: data.thumbnailSrc, alt: "thumbnails" }, void 0) }), void 0))] }), id)); }) }, void 0));
    }
    else {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(styled_1.SelectDropDownTabSectionField, __assign({ type: "notfound" }, { children: "No data found" }), void 0) }, void 0));
    }
};
exports.DropdownListRenderer = DropdownListRenderer;
react_1.default.memo(DropdownListRenderer);
