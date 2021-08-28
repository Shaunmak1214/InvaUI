export default function useDropdown(): {
    selected: string;
    onSelect: (identifier: string) => void;
};
