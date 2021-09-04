import React from "react";
interface DropdownListProps {
    filteredData: any;
    handleSelect: (primary: string) => void;
}
declare const DropdownListRenderer: React.FunctionComponent<DropdownListProps>;
export { DropdownListRenderer };
