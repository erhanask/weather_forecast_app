import {createContext, useState, useEffect} from "react";

const ContentContext = createContext();

export const ContentProvider = ({children}) => {
    const [theme,setTheme] = useState(localStorage.getItem('theme') || "light");

    useEffect(() => {
        localStorage.setItem('theme',theme);
    }, [theme])

    const values = {
        theme,
        setTheme
    }

    return (
        <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
    );
}

export {ContentContext};
