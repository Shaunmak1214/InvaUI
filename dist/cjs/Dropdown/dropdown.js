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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var styled_1 = require("./styled");
var Index = function (_a) {
    var onSelect = _a.onSelect, dropdownData = _a.dropdownData;
    var _b = (0, react_1.useState)(""), selectInput = _b[0], setSelectInput = _b[1];
    var _c = (0, react_1.useState)(false), focused = _c[0], setFocused = _c[1];
    var _d = (0, react_1.useState)(dropdownData), filteredData = _d[0], setFilteredData = _d[1];
    // dropdown data scheme
    // [
    //   {
    //     primary: String,
    //     secondary: [Strings],
    //     thumbnailSrc: String
    //   }
    // ]
    (0, react_1.useEffect)(function () {
        setFilteredData(dropdownData);
    }, [dropdownData]);
    var handleSelectOption = function (identifier) {
        setSelectInput(identifier);
        setFocused(false);
        onSelect(identifier);
    };
    var handleSearch = function (e) {
        var value = e.target.value.toLowerCase();
        var result = dropdownData.filter(function (data) {
            return data.primary.toLowerCase().search(value) != -1;
        });
        setSelectInput(value);
        setFocused(true);
        setFilteredData(result);
    };
    var componentRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        document.addEventListener("click", handleClick);
        return function () { return document.removeEventListener("click", handleClick); };
        function handleClick(e) {
            if (componentRef && componentRef.current) {
                var ref = componentRef.current;
                if (ref.contains(e.target)) {
                    setFocused(true);
                }
                else {
                    setFocused(false);
                }
            }
        }
    }, []);
    var DropDownListRenderer = function () {
        if (filteredData) {
            return ((0, jsx_runtime_1.jsx)(styled_1.SelectDropDownList, { children: filteredData.map(function (data, id) { return ((0, jsx_runtime_1.jsxs)(styled_1.SelectDropDownTab, __assign({ onClick: function () { return handleSelectOption(data.primary); }, "data-value": data.primary }, { children: [(0, jsx_runtime_1.jsxs)(styled_1.SelectDropDownTabSection, __assign({ type: "left" }, { children: [(0, jsx_runtime_1.jsx)(styled_1.SelectDropDownTabSectionField, __assign({ type: "primary" }, { children: data.primary }), void 0), data.secondary.map(function (data, idx) { return ((0, jsx_runtime_1.jsx)(styled_1.SelectDropDownTabSectionField, __assign({ type: "secondary" }, { children: data }), idx)); })] }), void 0), data.thumbnailSrc && ((0, jsx_runtime_1.jsx)(styled_1.SelectDropDownTabSection, __assign({ type: "right" }, { children: (0, jsx_runtime_1.jsx)("img", { style: { height: "100%", width: "100%" }, src: data.thumbnailSrc, alt: "thumbnails" }, void 0) }), void 0))] }), id)); }) }, void 0));
        }
        else {
            return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(styled_1.SelectDropDownTabSectionField, __assign({ type: "notfound" }, { children: "No data found" }), void 0) }, void 0));
        }
    };
    return ((0, jsx_runtime_1.jsxs)(styled_1.SelectWrapper, __assign({ ref: componentRef }, { children: [(0, jsx_runtime_1.jsx)(styled_1.SelectHeader, { children: (0, jsx_runtime_1.jsx)(styled_1.SelectHeaderInput, { value: selectInput, type: "text", placeholder: "Search ... ", onChange: function (e) { return handleSearch(e); } }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(styled_1.SelectDropDown, __assign({ visible: focused }, { children: (0, jsx_runtime_1.jsx)(DropDownListRenderer, {}, void 0) }), void 0)] }), void 0));
};
react_1.default.memo(Index);
exports.default = Index;
