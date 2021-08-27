import React, { useState } from "react";
import "./App.css";
import Dropdown from "./lib/components/Dropdown";

const App: React.FunctionComponent = () => {
  const [selected, setSelected] = useState<string>("");

  const onSelect = (selected: string) => {
    setSelected(selected);
  };

  // const dropdownData = [
  //   {
  //     identifier: "1",
  //     primary: "Option 1",
  //     secondary: [ 'Option2 Child' ],
  //     thumbnailSrc: "https://res.cloudinary.com/shaun-storage/image/upload/v1627135239/160x160_JumpStart_Logo_without_Word_Gradient_logo_uuy3ae.svg"
  //   }
  // ]

  return (
    <div className="App">
      <h1>Hello to InvaUI</h1>
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
