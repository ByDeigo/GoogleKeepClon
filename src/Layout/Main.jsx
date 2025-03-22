import NotesContainer from "../components/NotesComponents/NotesContainer";
import CreateNotes from "../components/NotesComponents/CreateNotes";
import { NotesContext } from "../contexts/NotesContext";
import { useContext } from "react";


export default function Main() {
    const { notes } = useContext(NotesContext)
    return (
        <main className=" flex flex-col gap-5 p-4 grow col-start-2 col-end-2 w-full ">
            <CreateNotes />
            <NotesContainer notesArray={notes} />
        </main>
    );
}