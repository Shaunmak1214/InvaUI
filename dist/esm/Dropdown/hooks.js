import { useState, useCallback } from "react";
export default function useDropdown() {
    var _a = useState(""), selected = _a[0], setSelected = _a[1];
    var onSelect = useCallback(function (identifier) {
        setSelected(identifier);
    }, []);
    return { selected: selected, onSelect: onSelect };
}
