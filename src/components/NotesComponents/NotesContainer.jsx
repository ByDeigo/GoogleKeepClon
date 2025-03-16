import Note from "./Note"

export default function NotesContainer() {
    return (
        <div className=" flex gap-4 p-2 h-auto items-center justify-center">
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    )
}