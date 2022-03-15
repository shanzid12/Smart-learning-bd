import { useEffect } from "react";
import useLocalStorage from "../src/hooks/useLocalStorage";
import useMyMediaQuery from "./useMyMediaQuery";

const useDarkMode = () => {
    const preferDarkMode = useMyMediaQuery(
        ['(prefers-color-scheme: dark)'],
        [true],
        false
    );

    const [enabled, setEnabled] = useLocalStorage('dark-mode', preferDarkMode);

    useEffect(() => {
        if (enabled) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [enabled]);

    return [enabled, setEnabled];
};

export default useDarkMode;

//https://github.com/AlterClassIO/react-custom-hooks/blob/481b41080693496ba42abddc71234749ff527693/docs/useDarkMode.md