import { createContext, useState } from "react";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, setNotes] = useState([]);
    function toggleNotes(newItems = [], noteChanges = {}) {
        if (Object.keys(noteChanges).length > 0) {
            const { noteId, keyChange, newValue } = noteChanges
            const notesUpdated = notes.map((note) => {
                if (note.id == noteId) {
                    note[keyChange] = newValue
                    console.log(note)
                    return note
                }
            })
            setNotes([...notes, notesUpdated]);
        } else {
            setNotes([...notes, newItems])
        }
    }
    return (
        <NotesContext.Provider value={{ notes, toggleNotes }}>
            {children}
        </NotesContext.Provider>
    )
}