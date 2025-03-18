import { createContext, useContext, useState } from "react";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, setNotes] = useState([]);
    function toggleNotes(newItems) {
        setNotes([...notes, newItems])
    }
    return (
        <NotesContext.Provider value={{ notes, toggleNotes }}>
            {children}
        </NotesContext.Provider>
    )
}