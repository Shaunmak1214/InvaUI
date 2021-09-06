import React from "react";

/* =============== Dropdown List Renderer Imports =============== */
import {
  SelectDropDownList,
  SelectDropDownTab,
  SelectDropDownTabSectionField,
  SelectDropDownTabContentWrapper,
  SelectDropDownTabImage,
  SelectDropDownTabContent,
} from "./styled";
/* =============== End Dropdown List Renderer Imports =============== */

/* 
  ===========================================================================
  ===========================================================================
  ===========================================================================
*/

/* =============== Dropdown List Renderer =============== */
interface DropdownListProps {
  filteredData: any;
  handleSelect: (primary: string) => void;
}
interface filteredDataProps {
  primary: string;
  secondary: Array<string>;
  thumbnailSrc: string;
}
const DropdownListRenderer: React.FunctionComponent<DropdownListProps> = ({
  filteredData,
  handleSelect,
}: DropdownListProps) => {
  if (filteredData && filteredData.length > 0) {
    return (
      <SelectDropDownList>
        {filteredData.map((data: filteredDataProps, id: number) => (
          <SelectDropDownTab
            key={id}
            onClick={() => handleSelect(data.primary)}
            data-value={data.primary}
          >
            <SelectDropDownTabContentWrapper>
              {data.thumbnailSrc && (
                <SelectDropDownTabImage>
                  <img
                    style={{ height: "auto", width: "100%", maxWidth: "40px" }}
                    src={data.thumbnailSrc}
                    alt="thumbnails"
                  />
                </SelectDropDownTabImage>
              )}
              <SelectDropDownTabContent>
                <SelectDropDownTabSectionField type="primary">
                  {data.primary}
                </SelectDropDownTabSectionField>
                {data.secondary.map((data, idx) => (
                  <SelectDropDownTabSectionField key={idx} type="secondary">
                    {data}
                  </SelectDropDownTabSectionField>
                ))}
              </SelectDropDownTabContent>
            </SelectDropDownTabContentWrapper>
          </SelectDropDownTab>
        ))}
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
React.memo(DropdownListRenderer);
/* =============== End Dropdown List Renderer =============== */

export { DropdownListRenderer };
