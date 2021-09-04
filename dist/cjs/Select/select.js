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
var utils_1 = require("./utils");
var Index = function (_a) {
    var onSelect = _a.onSelect, dropdownData = _a.dropdownData, leadingIcon = _a.leadingIcon;
    var dropdownRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(""), selectInput = _b[0], setSelectInput = _b[1];
    var _c = (0, react_1.useState)(dropdownData), filteredData = _c[0], setFilteredData = _c[1];
    (0, react_1.useEffect)(function () {
        setFilteredData(dropdownData);
    }, [dropdownData]);
    var toggleDropdown = function (status) {
        if (dropdownRef.current && status === "open") {
            dropdownRef.current.style.opacity = "1";
            dropdownRef.current.style.transform = "scaleY(1.00)";
            dropdownRef.current.style.padding = "20px 20px";
            dropdownRef.current.style.zIndex = "50";
        }
        else if (dropdownRef.current && status === "close") {
            dropdownRef.current.style.opacity = "0";
            dropdownRef.current.style.transform = "scaleY(0.00)";
            dropdownRef.current.style.padding = "0px 0px";
            dropdownRef.current.style.zIndex = "-1";
        }
    };
    var handleSelectOption = react_1.default.useCallback(function (identifier) {
        setSelectInput(identifier);
        toggleDropdown("close");
        onSelect(identifier);
    }, [onSelect]);
    var handleSearch = function (e) {
        var value = e.target.value.toLowerCase();
        var result = dropdownData.filter(function (data) {
            return data.primary.toLowerCase().search(value) != -1;
        });
        setSelectInput(value);
        toggleDropdown("open");
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
                    return;
                }
                else {
                    toggleDropdown("close");
                }
            }
        }
    }, []);
    return ((0, jsx_runtime_1.jsxs)(styled_1.SelectWrapper, __assign({ ref: componentRef }, { children: [(0, jsx_runtime_1.jsxs)(styled_1.SelectHeader, { children: [(0, jsx_runtime_1.jsx)(styled_1.SelectHeaderInput, { value: selectInput, type: "text", placeholder: "Search ... ", onChange: function (e) { return handleSearch(e); }, onClick: function () {
                            toggleDropdown("open");
                        } }, void 0), leadingIcon && ((0, jsx_runtime_1.jsx)(styled_1.SelectHeaderInputIcon, { src: leadingIcon, alt: "search icon" }, void 0))] }, void 0), (0, jsx_runtime_1.jsx)(styled_1.SelectDropDown, __assign({ ref: dropdownRef }, { children: (0, jsx_runtime_1.jsx)(utils_1.DropdownListRenderer, { filteredData: filteredData, handleSelect: handleSelectOption }, void 0) }), void 0)] }), void 0));
};
react_1.default.memo(Index);
exports.default = Index;
