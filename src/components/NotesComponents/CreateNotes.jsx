import { Pin, Palette, BellPlus, UserPlus, Image, Archive, EllipsisVertical, Undo2, Redo2, User, icons, Icon } from "lucide-react"
import { IconHover } from "../IconsEffects"
import { useState, useMemo, useRef, useReducer } from "react"
import { useContext, useEffect } from "react"
import { NotesContext } from "../../contexts/NotesContext"
import { createNotesReducerKeys } from "../../const"


const initialState = {
    title: '',
    description: '',
    id: 0,
    pinned: false,
}



export default function CreateNotes() {
    //Estados y referencias
    const [isOpen, setOpen] = useState(false);
    const createNotesRef = useRef(null);
    const inputDescriptionRef = useRef(null);
    //Reducer
    function reducer(state, action) {
        switch (action.type) {
            case createNotesReducerKeys.ADD_TITLE: {
                return { ...state, title: action.value }
            }
            case createNotesReducerKeys.ADD_DESCRIPTION: {
                return { ...state, description: action.value }
            }
            case createNotesReducerKeys.ADD_ID: {
                return { ...state, id: action.value }
            }
            case createNotesReducerKeys.PIN: {
                return { ...state, pinned: action.value }
            }
            case createNotesReducerKeys.RESET: {
                return initialState
            }
            default: {
                return state
            }
        }
    }


    //Usereducer
    const [state, dispatch] = useReducer(reducer, initialState);
    //Iconos
    const iconList = useMemo(() => [
        Palette, BellPlus, UserPlus, Image, Archive, EllipsisVertical, Undo2, Redo2
    ], [])
    const iconSize = '16px'
    const iconColor = '#5a5a5a'
    const iconStrokeWidth = '2.5px'
    //Contextos
    const { notes, toggleNotes } = useContext(NotesContext);
    //Handle functions
    function resetValues() {
        dispatch({ type: createNotesReducerKeys.RESET })
    }
    function formatNoteId(number) {
        return number.toString().slice(-6);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (state.title || state.description !== '') {
            toggleNotes(state);
            setOpen(true);
            resetValues();
        }
    }


    function handleInputTextarea(e) {
        e.target.style.height = '38px'
        e.target.style.height = e.target.scrollHeight + 'px';
    }


    function handleChangeDescription(e) {
        dispatch({ type: createNotesReducerKeys.ADD_DESCRIPTION, value: e.target.value })
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (createNotesRef.current && !(createNotesRef.current.contains(e.target))) {
                handleSubmit(e);
            }
        }
        if (createNotesRef) {
            document.addEventListener('click', handleClickOutside)
            return () => {
                document.removeEventListener('click', handleClickOutside)
            }
        }
    })


    return (
        <form className="mx-auto w-2/3 h-auto max-w-[600px] rounded-lg shadow-lg flex flex-col p-4 gap-4" ref={createNotesRef}>
            <div className={` ${isOpen ? "w-full flex justify-between" : "hidden"}`}>
                <input
                    placeholder="Título"
                    className="placeholder:font-semibold w-full focus-visible:outline-none"
                    value={state.title}
                    onChange={(e) => {
                        dispatch({ type: createNotesReducerKeys.ADD_TITLE, value: e.target.value });
                    }}
                    onFocus={() => {
                        dispatch({ type: createNotesReducerKeys.ADD_ID, value: formatNoteId(Date.now()) });
                    }}
                />

                <IconHover title={"Fijar nota"} >
                    <Pin
                        color={state.pinned ? "black" : "gray"}
                        onClick={() => {
                            dispatch({ type: createNotesReducerKeys.PIN, value: !state.pinned });
                        }}
                    />
                </IconHover>
            </div>

            {/* Crear una nota */}
            {!isOpen ? (
                <input
                    placeholder="Crear una nota..."
                    className="w-full focus-visible:outline-none placeholder:text-[#4c4c4c]"
                    onFocus={() => {
                        setOpen(true)
                        dispatch({ type: createNotesReducerKeys.ADD_ID, value: formatNoteId(Date.now()) });
                    }}
                    value={state.description}
                    onChange={handleChangeDescription} />
            ) : (
                <textarea
                    placeholder="Crear una nota..."
                    className="w-full focus-visible:outline-none h-auto placeholder:text-[#4c4c4c]"
                    onFocus={() => {
                        setOpen(true)
                        dispatch({ type: createNotesReducerKeys.ADD_ID, value: formatNoteId(Date.now()) });
                    }}
                    value={state.description}
                    ref={inputDescriptionRef}
                    onChange={handleChangeDescription}
                    onInput={handleInputTextarea}
                />
            )

            }


            <div className={` ${isOpen ? "flex w-full justify-between" : "hidden"}`}>
                <aside className="flex items-center justify-between w-2/3">
                    {iconList.map((Icon, index) => (
                        <IconHover key={index}>
                            <Icon size={iconSize} color={iconColor} strokeWidth={iconStrokeWidth} />
                        </IconHover>
                    ))}
                </aside>
                <div className={` ${isOpen ? "w-1/3 flex justify-end items-center" : "hidden"}`}>
                    <button
                        onClick={(e) => {
                            handleSubmit(e)
                            setOpen(false);
                            inputDescriptionRef.current.blur()
                        }}
                        className="hover:bg-zinc-200 hover:cursor-pointer hover:outline-4 outline-zinc-200 rounded-sm w-1/2 flex justify-center">
                        <p className="text-zinc-600">Cerrar</p>
                    </button>
                </div>
            </div>
        </form>
    )
}
