import { useState } from "react";

export default function useDropdown() {
  const [selected, setSelected] = useState<string>("");

  const onSelect = (identifier: string) => {
    setSelected(identifier);
  };

  return { selected, onSelect };
}
