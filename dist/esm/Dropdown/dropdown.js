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
import React, { useState, useEffect, useRef } from "react";
import { SelectWrapper, SelectHeader, SelectHeaderInput, SelectHeaderInputIcon, SelectDropDown, SelectDropDownList, SelectDropDownTab, SelectDropDownTabSection, SelectDropDownTabSectionField, } from "./styled";
var Index = function (_a) {
    var onSelect = _a.onSelect, dropdownData = _a.dropdownData, leadingIcon = _a.leadingIcon;
    var _b = useState(""), selectInput = _b[0], setSelectInput = _b[1];
    var _c = useState(false), focused = _c[0], setFocused = _c[1];
    var _d = useState(dropdownData), filteredData = _d[0], setFilteredData = _d[1];
    // dropdown data scheme
    // [
    //   {
    //     primary: String,
    //     secondary: [Strings],
    //     thumbnailSrc: String
    //   }
    // ]
    useEffect(function () {
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
    var componentRef = useRef(null);
    useEffect(function () {
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
        if (filteredData && filteredData.length > 0) {
            return (_jsx(SelectDropDownList, { children: filteredData.map(function (data, id) { return (_jsxs(SelectDropDownTab, __assign({ onClick: function () { return handleSelectOption(data.primary); }, "data-value": data.primary }, { children: [_jsxs(SelectDropDownTabSection, __assign({ type: "left" }, { children: [_jsx(SelectDropDownTabSectionField, __assign({ type: "primary" }, { children: data.primary }), void 0), data.secondary.map(function (data, idx) { return (_jsx(SelectDropDownTabSectionField, __assign({ type: "secondary" }, { children: data }), idx)); })] }), void 0), data.thumbnailSrc && (_jsx(SelectDropDownTabSection, __assign({ type: "right" }, { children: _jsx("img", { style: { height: "auto", width: "100%", maxWidth: "40px" }, src: data.thumbnailSrc, alt: "thumbnails" }, void 0) }), void 0))] }), id)); }) }, void 0));
        }
        else {
            return (_jsx(_Fragment, { children: _jsx(SelectDropDownTabSectionField, __assign({ type: "notfound" }, { children: "No data found" }), void 0) }, void 0));
        }
    };
    return (_jsxs(SelectWrapper, __assign({ ref: componentRef }, { children: [_jsxs(SelectHeader, { children: [_jsx(SelectHeaderInput, { value: selectInput, type: "text", placeholder: "Search ... ", onChange: function (e) { return handleSearch(e); } }, void 0), leadingIcon && (_jsx(SelectHeaderInputIcon, { src: leadingIcon, alt: "search icon" }, void 0))] }, void 0), _jsx(SelectDropDown, __assign({ visible: focused }, { children: _jsx(DropDownListRenderer, {}, void 0) }), void 0)] }), void 0));
};
React.memo(Index);
export default Index;
