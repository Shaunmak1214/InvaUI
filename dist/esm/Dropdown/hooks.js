import { useState } from "react";
export default function useDropdown() {
    var _a = useState(""), selected = _a[0], setSelected = _a[1];
    var onSelect = function (identifier) {
        setSelected(identifier);
    };
    return { selected: selected, onSelect: onSelect };
}
