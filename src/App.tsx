import React, { useState } from "react";
import "./App.css";
import { Dropdown, useDropdown } from "./lib/components/";

const App: React.FunctionComponent = () => {
  const { selected, onSelect } = useDropdown();

  return (
    <div className="App">
      <h1>Hello to InvaUI</h1>
      <h3>{selected}</h3>
      <Dropdown
        onSelect={onSelect}
        dropdownData={[
          {
            identifer: "1",
            primary: "Option 1",
            secondary: ["Option2 Child"],
            thumbnailSrc:
              "https://res.cloudinary.com/shaun-storage/image/upload/v1627135239/160x160_JumpStart_Logo_without_Word_Gradient_logo_uuy3ae.svg",
          },
        ]}
      />
    </div>
  );
};

export default App;
