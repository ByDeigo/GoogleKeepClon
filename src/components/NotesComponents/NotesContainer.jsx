import Note from "./Note"
import { useContext, useEffect, useState } from "react"
import { DisplayContext } from "../../contexts/DisplayContext"

export default function NotesContainer({ notesArray }) {
    const { isDisplayChanged } = useContext(DisplayContext);
    const [pinnedNotes, setPinnedNotes] = useState([]);
    const [normalNotes, setNormalNotes] = useState([]);


    useEffect(() => {
        const filterPinnedNotes = notesArray.filter((note) => note.pinned == true);
        setPinnedNotes(filterPinnedNotes);
        const filterNormalNotes = notesArray.filter((note) => note.pinned == false);
        setNormalNotes(filterNormalNotes);
    }, [notesArray]);


    return (
        <div className="flex flex-col gap-5">
            {pinnedNotes.length > 0 && <h3 className="py-6 px-5 text-sm font-semibold text-zinc-500">Fijas</h3>}
            <section className={isDisplayChanged ? 'alternativeDisplay ' : 'masonryGrid'} >
                {pinnedNotes.map((note) => (
                    <Note title={note.title} isPinned={note.pinned} content={note.description} id={note.id} key={note.id} />
                ))}
            </section>
            {pinnedNotes.length > 0 && pinnedNotes > 0 && <h3 className="py-6 px-5 text-sm font-semibold text-zinc-500">Otras</h3>}
            <section className={isDisplayChanged ? 'alternativeDisplay ' : 'masonryGrid'} >
                {normalNotes.map((note) => (
                    <Note title={note.title} isPinned={note.pinned} content={note.description} id={note.id} key={note.id} />
                ))}
            </section>
        </div>
    )
}
