import { useState, useCallback } from "react";

export default function useSelect() {
  const [selected, setSelected] = useState<string>("");

  const onSelect = useCallback((identifier: string) => {
    setSelected(identifier);
  }, []);

  return { selected, onSelect };
}
