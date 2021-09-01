import React, { useState, useEffect, useRef } from "react";
import {
  SelectWrapper,
  SelectHeader,
  SelectHeaderInput,
  SelectHeaderInputIcon,
  SelectDropDown,
} from "./styled";

import { DropdownListRenderer } from "./utils";

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

const Index: React.FunctionComponent<Props> = ({
  onSelect,
  dropdownData,
  leadingIcon,
}: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectInput, setSelectInput] = useState("");
  const [filteredData, setFilteredData] = useState(dropdownData);

  useEffect(() => {
    setFilteredData(dropdownData);
  }, [dropdownData]);

  const toggleDropdown = (status: string) => {
    if (dropdownRef.current && status === "open") {
      dropdownRef.current.style.opacity = "1";
      dropdownRef.current.style.transform = "scaleY(1.00)";
      dropdownRef.current.style.padding = "20px 20px";
      dropdownRef.current.style.zIndex = "50";
    } else if (dropdownRef.current && status === "close") {
      dropdownRef.current.style.opacity = "0";
      dropdownRef.current.style.transform = "scaleY(0.00)";
      dropdownRef.current.style.padding = "0px 0px";
      dropdownRef.current.style.zIndex = "-1";
    }
  };

  const handleSelectOption = React.useCallback(
    (identifier: string) => {
      setSelectInput(identifier);
      toggleDropdown("close");
      onSelect(identifier);
    },
    [onSelect]
  );

  const handleSearch = (e: { target: HTMLInputElement }) => {
    const value = e.target.value.toLowerCase();
    const result = dropdownData.filter((data) => {
      return data.primary.toLowerCase().search(value) != -1;
    });
    setSelectInput(value);
    toggleDropdown("open");
    setFilteredData(result);
  };

  const componentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (componentRef && componentRef.current) {
        const ref: any = componentRef.current;
        if (ref.contains(e.target)) {
          return;
        } else {
          toggleDropdown("close");
        }
      }
    }
  }, []);

  return (
    <SelectWrapper ref={componentRef}>
      <SelectHeader>
        <SelectHeaderInput
          value={selectInput}
          type="text"
          placeholder="Search ... "
          onChange={(e) => handleSearch(e)}
          onClick={() => {
            toggleDropdown("open");
          }}
        ></SelectHeaderInput>
        {leadingIcon && (
          <SelectHeaderInputIcon src={leadingIcon} alt="search icon" />
        )}
      </SelectHeader>
      <SelectDropDown ref={dropdownRef}>
        <DropdownListRenderer
          filteredData={filteredData}
          handleSelect={handleSelectOption}
        />
      </SelectDropDown>
    </SelectWrapper>
  );
};

React.memo(Index);
export default Index;
