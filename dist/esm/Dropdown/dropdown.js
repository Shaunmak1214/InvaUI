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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from "react";
import { SelectWrapper, SelectHeader, SelectHeaderInput, SelectHeaderInputIcon, SelectDropDown, } from "./styled";
import { DropdownListRenderer } from "./utils";
var Index = function (_a) {
    var onSelect = _a.onSelect, dropdownData = _a.dropdownData, leadingIcon = _a.leadingIcon;
    var dropdownRef = useRef(null);
    var _b = useState(""), selectInput = _b[0], setSelectInput = _b[1];
    var _c = useState(dropdownData), filteredData = _c[0], setFilteredData = _c[1];
    useEffect(function () {
        setFilteredData(dropdownData);
    }, [dropdownData]);
    var toggleDropdown = function (status) {
        if (dropdownRef.current && status === "open") {
            dropdownRef.current.style.opacity = "1";
            dropdownRef.current.style.transform = "scaleY(1.00)";
            dropdownRef.current.style.padding = "5px 10px";
            dropdownRef.current.style.zIndex = "50";
        }
        else if (dropdownRef.current && status === "close") {
            dropdownRef.current.style.opacity = "0";
            dropdownRef.current.style.transform = "scaleY(0.00)";
            dropdownRef.current.style.padding = "0px 0px";
            dropdownRef.current.style.zIndex = "-1";
        }
    };
    var handleSelectOption = React.useCallback(function (identifier) {
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
    var componentRef = useRef(null);
    useEffect(function () {
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
    return (_jsxs(SelectWrapper, __assign({ ref: componentRef }, { children: [_jsxs(SelectHeader, { children: [_jsx(SelectHeaderInput, { value: selectInput, type: "text", placeholder: "Search ... ", onChange: function (e) { return handleSearch(e); }, onClick: function () {
                            toggleDropdown("open");
                        } }, void 0), leadingIcon && (_jsx(SelectHeaderInputIcon, { src: leadingIcon, alt: "search icon" }, void 0))] }, void 0), _jsx(SelectDropDown, __assign({ ref: dropdownRef }, { children: _jsx(DropdownListRenderer, { filteredData: filteredData, handleSelect: handleSelectOption }, void 0) }), void 0)] }), void 0));
};
React.memo(Index);
export default Index;
