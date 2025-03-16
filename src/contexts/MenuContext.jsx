import { createContext, useState } from "react";

//Crear el contexto

export const MenuContext = createContext();

//Crear el provider donde están las func y el estado

export function MenuProvider({ children }) {
    const [isAsideOpen, setAsideOpen] = useState(false);

    function toggleOpen() {
        setAsideOpen(prev => !prev);
    }
    return (
        <MenuContext.Provider value={{ isAsideOpen, toggleOpen }}>
            {children}
        </MenuContext.Provider>
    )
}

