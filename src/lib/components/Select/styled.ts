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
  border-radius: 4px;
  border: none;
  width: 100%;
  font-family: "Poppins";
  border: 2.2px solid #f5f5f5;
  background-color: #f5f5f5;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2.2px solid #000000;
  }

  &:focus {
    outline: none;
    border: 2.2px solid #000000;
  }
`;

export const SelectHeaderInputIcon = styled.img`
  height: 15px;
  width: 15px;
  position: absolute;
  right: 20px;
`;

export const SelectDropDown = styled.div`
  position: absolute;
  width: 90%;
  max-width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 5px 10px;
  margin-top: 10px;
  max-height: 300px;
  overflow: auto;

  border: 0.5px solid #f5f5f5;
  box-shadow: 0px 16px 40px rgba(213, 213, 213, 0.25);

  transform-origin: top;

  ${smoothTransition};

  /* inital css */
  opacity: 0;
  transform: scaleY(0);
  z-index: -1;
  padding: 0px 0px;

  &::-webkit-scrollbar {
    width: 0px;
    height: 80%;
    margin-right: 0px;
  }
`;

export const SelectDropDownList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SelectDropDownTab = styled.div`
  cursor: pointer;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 0.5px solid transparent;
  padding: 10px 20px;

  &:hover {
    border: 1px solid #000000;
  }
`;

export const SelectDropDownTabContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SelectDropDownTabImage = styled.div`
  max-height: 100%;
  max-width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  margin-right: 20px;
`;

export const SelectDropDownTabContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SelectDropDownTabSectionField = styled.div`
  text-align: start;
  font-style: normal;
  ${(props: ThemedStyledProps<SelectDropDownTabSectionField, any>) => {
    if (props.type === "primary") {
      return 'margin-bottom: 5px; font-family: "Poppins"; font-size: 15px; font-weight: 700; color: black !important;';
    } else if (props.type === "secondary") {
      return 'margin-top: 0px !important; font-family: "Source Sans Pro"; font-size: 13px; font-weight: 500; color: rgb(163,163,163) !important;';
    } else if (props.type === "notfound") {
      return 'margin-bottom: 5px; font-family: "Source Sans Pro"; font-size: 12px; font-weight: 600; color: rgb(163,163,163) !important; width: 100%; display: flex; justify-content: center; align-item: center';
    } else {
      return 'margin-bottom: 5px; font-family: "Source Sans Pro"; font-size: 15px; font-weight: 600; color: black !important;';
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
