import { Pin } from "lucide-react"
import { useState, useContext } from "react"
import { NotesContext } from "../../contexts/NotesContext"


export default function Note({ title, content, isPinned, id }) {
    let formatedContent = content.replace(/\n/g, "<br />");
    let formatedTitle = title.replace(/\n/g, "<br />");
    if (formatedContent.split(' ').length > 58 || title.split(' ').length > 10) {
        formatedContent = formatedContent.split(' ').slice(0, 58).join(' ') + '...'
        formatedTitle = formatedTitle.split(' ').slice(0, 11).join(' ') + '...'
    }


    const { notes, toggleNotes } = useContext(NotesContext);


    function handleUpdate() {
        const newPinnedValue = !isPinned
        const noteUpdate = {
            noteId: id,
            keyChange: 'pinned',
            newValue: newPinnedValue,
        }
        toggleNotes([], noteUpdate);
    }

    return (
        <article className="min-h-[150px] max-h-[460px] bg-white rounded-lg border-zinc-300 border-1 p-4 overflow-hidden transition-all duration-300 hover:cursor-pointer hover:shadow-lg group">
            <div className="flex justify-between items-center whitespace-pre-wrap">
                < label className="font-semibold text-zinc-950 h-1/3">{title}</label >
                <Pin color="black" fill={isPinned ? "black" : 'white'} className="group-hover:opacity-100 opacity-0 transition-opacity duration-300" width={'20px'} onClick={handleUpdate} />
            </div>
            <p className="h-2/3">{content}</p>
        </article >
    )
}