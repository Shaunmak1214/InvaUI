import styled, { ThemedStyledProps } from "styled-components";

import { smoothTransition } from "../utils";

/* Interfaces */
export interface SelectDropDownInterface {
  visible: boolean;
}

export interface SelectDropDownTabSection {
  type: string;
}

export interface SelectDropDownTabSectionField {
  type?: string;
}

export const SelectWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: white;
  position: relative;
`;

export const SelectHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SelectHeaderInput = styled.input`
  position: relative;
  padding: 15px 15px;
  background-color: white;
  border-radius: 8px;
  border: none;
  width: 100%;
  font-family: "Poppins";
  border: 2px solid #f5f5f5;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid rgb(168, 194, 240);
  }

  &:focus {
    outline: none;
    border: 2px solid rgb(136, 173, 238);
  }
`;

export const SelectHeaderInputIcon = styled.img`
  height: 15px;
  width: 15px;
  position: absolute;
  right: 20px;
  bottom: 17px;
`;

export const SelectDropDown = styled.div`
  position: absolute;
  width: 100%;
  max-width: 100%;
  background-color: white;
  border: 2px solid #f1f1f1;
  border-radius: 4px;
  padding: 5px 10px;
  margin-top: 5px;
  max-height: 300px;
  overflow: auto;

  transform-origin: top;

  ${smoothTransition};

  /* inital css */
  opacity: 0;
  transform: scaleY(0);
  z-index: -1;
  padding: 0px 0px;

  &::-webkit-scrollbar {
    width: 2px;
    height: 80%;
    margin-right: 5px;
  }
`;

// ${(props: ThemedStyledProps<SelectDropDownInterface, any>) => {
//   if (props.visible === true) {
//     return "transform: scaleY(1.00) !important; opacity: 1 !important; z-index: 1001 !important;";
//   } else {
//     return "transform: scaleY(0.00) !important; padding: 0px 0px !important; opacity: 0 !important; z-index: -1 !important;";
//   }
// }};

export const SelectDropDownList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SelectDropDownTab = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 10px 20px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const SelectDropDownTabSection = styled.div`
  ${(props: ThemedStyledProps<SelectDropDownTabSection, any>) => {
    if (props.type === "left") {
      return "width: 100%; display: flex; flex-direction: column; justify-content: flex-start; align-item: flex-start;";
    } else if (props.type === "right") {
      return "max-height: 100%; max-width: 70px; display: flex; justify-content: center; align-item: center; padding: 10px 10px;";
    } else {
      return "width: 100%; display: flex; flex-direction: column; justify-content: flex-start; align-item: flex-start;";
    }
  }}
`;

export const SelectDropDownTabSectionField = styled.div`
  text-align: start;
  ${(props: ThemedStyledProps<SelectDropDownTabSectionField, any>) => {
    if (props.type === "primary") {
      return 'margin-bottom: 5px; font-family: "Quicksand"; font-size: 15px; font-weight: 600; color: black !important;';
    } else if (props.type === "secondary") {
      return 'margin-top: 0px !important; font-family: "Poppins"; font-size: 11px; font-weight: 500; color: rgb(163,163,163) !important;';
    } else if (props.type === "notfound") {
      return 'margin-bottom: 5px; font-family: "Quicksand"; font-size: 12px; font-weight: 600; color: rgb(163,163,163) !important; width: 100%; display: flex; justify-content: center; align-item: center';
    } else {
      return 'margin-bottom: 5px; font-family: "Quicksand"; font-size: 15px; font-weight: 600; color: black !important;';
    }
  }}
`;

export const SelectDropDownTabSeperator = styled.div`
  font-size: 20px;
  font-family: "Quicksand";
  font-weight: 600;
  border-bottom: 2px solid #f5f5f5;
  margin-top: 5px;
  margin-bottom: 5px;
`;
