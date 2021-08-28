import React, { useState, useEffect, useRef } from "react";
import {
  SelectWrapper,
  SelectHeader,
  SelectHeaderInput,
  SelectDropDown,
  SelectDropDownList,
  SelectDropDownTab,
  SelectDropDownTabSection,
  SelectDropDownTabSectionField,
} from "./styled";

interface dropdownData {
  identifer: string;
  primary: string;
  secondary: Array<string>;
  thumbnailSrc: string;
}
interface Props {
  onSelect: (identifier: string) => void;
  dropdownData: Array<dropdownData>;
}

const Index: React.FunctionComponent<Props> = ({
  onSelect,
  dropdownData,
}: Props) => {
  const [selectInput, setSelectInput] = useState("");
  const [focused, setFocused] = useState(false);
  const [filteredData, setFilteredData] = useState(dropdownData);

  // dropdown data scheme
  // [
  //   {
  //     primary: String,
  //     secondary: [Strings],
  //     thumbnailSrc: String
  //   }
  // ]

  useEffect(() => {
    setFilteredData(dropdownData);
  }, [dropdownData]);

  const handleSelectOption = (identifier: string) => {
    setSelectInput(identifier);
    setFocused(false);
    onSelect(identifier);
  };

  const handleSearch = (e: { target: HTMLInputElement }) => {
    const value = e.target.value.toLowerCase();
    const result = dropdownData.filter((data) => {
      return data.primary.toLowerCase().search(value) != -1;
    });
    setSelectInput(value);
    setFocused(true);
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
          setFocused(true);
        } else {
          setFocused(false);
        }
      }
    }
  }, []);

  const DropDownListRenderer = () => {
    if (filteredData) {
      return (
        <SelectDropDownList>
          {filteredData.map((data, id) => (
            <SelectDropDownTab
              key={id}
              onClick={() => handleSelectOption(data.primary)}
              data-value={data.primary}
            >
              <SelectDropDownTabSection type="left">
                <SelectDropDownTabSectionField type="primary">
                  {data.primary}
                </SelectDropDownTabSectionField>
                {data.secondary.map((data, idx) => (
                  <SelectDropDownTabSectionField key={idx} type="secondary">
                    {data}
                  </SelectDropDownTabSectionField>
                ))}
              </SelectDropDownTabSection>
              {data.thumbnailSrc && (
                <SelectDropDownTabSection type="right">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={data.thumbnailSrc}
                    alt="thumbnails"
                  />
                </SelectDropDownTabSection>
              )}
            </SelectDropDownTab>
          ))}
          {/* <INLoader size="md" /> */}
        </SelectDropDownList>
      );
    } else {
      return (
        <>
          <SelectDropDownTabSectionField type="notfound">
            No data found
          </SelectDropDownTabSectionField>
        </>
      );
    }
  };

  return (
    <SelectWrapper ref={componentRef}>
      <SelectHeader>
        <SelectHeaderInput
          value={selectInput}
          type="text"
          placeholder="Search ... "
          onChange={(e) => handleSearch(e)}
        ></SelectHeaderInput>
        {/* <SelectHeaderInputIcon src={Search} alt="search icon" /> */}
      </SelectHeader>
      <SelectDropDown visible={focused}>
        <DropDownListRenderer />
      </SelectDropDown>
    </SelectWrapper>
  );
};

React.memo(Index);
export default Index;
