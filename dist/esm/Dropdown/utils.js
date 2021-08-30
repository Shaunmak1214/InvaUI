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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
/* =============== Dropdown List Renderer Imports =============== */
import { SelectDropDownList, SelectDropDownTab, SelectDropDownTabSection, SelectDropDownTabSectionField, } from "./styled";
var DropdownListRenderer = function (_a) {
    var filteredData = _a.filteredData, handleSelect = _a.handleSelect;
    if (filteredData && filteredData.length > 0) {
        return (_jsx(SelectDropDownList, { children: filteredData.map(function (data, id) { return (_jsxs(SelectDropDownTab, __assign({ onClick: function () { return handleSelect(data.primary); }, "data-value": data.primary }, { children: [_jsxs(SelectDropDownTabSection, __assign({ type: "left" }, { children: [_jsx(SelectDropDownTabSectionField, __assign({ type: "primary" }, { children: data.primary }), void 0), data.secondary.map(function (data, idx) { return (_jsx(SelectDropDownTabSectionField, __assign({ type: "secondary" }, { children: data }), idx)); })] }), void 0), data.thumbnailSrc && (_jsx(SelectDropDownTabSection, __assign({ type: "right" }, { children: _jsx("img", { style: { height: "auto", width: "100%", maxWidth: "40px" }, src: data.thumbnailSrc, alt: "thumbnails" }, void 0) }), void 0))] }), id)); }) }, void 0));
    }
    else {
        return (_jsx(_Fragment, { children: _jsx(SelectDropDownTabSectionField, __assign({ type: "notfound" }, { children: "No data found" }), void 0) }, void 0));
    }
};
React.memo(DropdownListRenderer);
/* =============== End Dropdown List Renderer =============== */
export { DropdownListRenderer };
