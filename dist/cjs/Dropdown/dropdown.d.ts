import React from "react";
interface dropdownData {
    identifer: string;
    primary: string;
    secondary: Array<string>;
    thumbnailSrc: string;
}
interface Props {
    onSelect: (identifier: string) => void;
    dropdownData: Array<dropdownData>;
    leadingIcon?: any;
    scrollToLoad?: boolean;
    maxItemsOnLoad?: number;
}
declare const Index: React.FunctionComponent<Props>;
export default Index;
