export default function useSelect(): {
    selected: string;
    onSelect: (identifier: string) => void;
};
