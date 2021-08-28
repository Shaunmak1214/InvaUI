"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useDropdown() {
    var _a = (0, react_1.useState)(""), selected = _a[0], setSelected = _a[1];
    var onSelect = function (identifier) {
        setSelected(identifier);
    };
    return { selected: selected, onSelect: onSelect };
}
exports.default = useDropdown;
