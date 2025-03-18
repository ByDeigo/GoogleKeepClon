import Note from "./Note"
import { useContext } from "react"
import { DisplayContext } from "../../contexts/DisplayContext"

export default function NotesContainer({ notesArray }) {
    const { isDisplayChanged } = useContext(DisplayContext);
    //Filtrado de notas
    const pinnedNotes = notesArray.filter((note) => note.pinned == true);
    const normalNotes = notesArray.filter((note) => note.pinned == false);

    return (
        <div className={isDisplayChanged ? 'alternativeDisplay ' : 'masonryGrid'} >
            {[...pinnedNotes, ...normalNotes].map((note, index) => (
                <Note title={note.title} isPinned={note.pinned} content={note.description} key={index} />
            ))}
        </div>
    )
}
