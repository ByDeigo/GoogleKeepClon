import { createContext, useState } from "react";

export const DisplayContext = createContext();

export function DisplayProvider({ children }) {
    const [isDisplayChanged, setDisplayChanged] = useState(false);
    function toggleDisplay() {
        console.log('Activado')
        setDisplayChanged(prev => !prev);
    }
    return (
        <DisplayContext.Provider value={{ isDisplayChanged, toggleDisplay }}>
            {children}
        </DisplayContext.Provider>
    )
}