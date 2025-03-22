import { Pin, Palette, BellPlus, UserPlus, Image, Archive, EllipsisVertical, Undo2, Redo2, User, icons, Icon } from "lucide-react"
import { IconHover } from "../IconsEffects"
import { useState, useMemo, useRef, useReducer } from "react"
import { useContext, useEffect } from "react"
import { NotesContext } from "../../contexts/NotesContext"


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
    const inputTitleRef = useRef(null);
    //Reducer
    function reducer(state, action) {
        switch (action.type) {
            case 'ADD_TITLE': {
                return { ...state, title: inputTitleRef.current.value }
            }
            case 'ADD_DESCRIPTION': {
                return { ...state, description: inputDescriptionRef.current.value }
            }
            case 'ADD_ID': {
                return { ...state, id: action.value }
            }
            case 'PIN': {
                return { ...state, pinned: action.value }
            }
            case 'RESET': {
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
        dispatch({ type: 'RESET' })
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

    useEffect(() => {
        function handleClickOutside(e) {
            if (!(e.target.classList.contains('createNotesItem'))) {
                handleSubmit(e);
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    })


    return (
        <form className="mx-auto w-2/3 max-w-[600px] rounded-lg shadow-lg flex flex-col p-4 gap-4 createNotesItem" ref={createNotesRef}>
            <div className={`createNotesItem ${isOpen ? "w-full flex justify-between" : "hidden"}`}>
                <input
                    placeholder="Título"
                    className="placeholder:font-semibold w-full focus-visible:outline-none createNotesItem"
                    ref={inputTitleRef}
                    value={state.title}
                    onChange={(e) => {
                        dispatch({ type: "ADD_TITLE", value: e.target.value });
                    }}
                    onFocus={() => {
                        dispatch({ type: 'ADD_ID', value: formatNoteId(Date.now()) });
                    }}
                />

                <IconHover title={"Fijar nota"} className="createNotesItem">
                    <Pin
                        color={state.pinned ? "black" : "gray"}
                        onClick={() => {
                            dispatch({ type: "PIN", value: !state.pinned });
                        }}
                        className="createNotesItem"
                    />
                </IconHover>
            </div>

            {/* Crear una nota */}
            <input
                placeholder="Crear una nota..."
                className="w-full focus-visible:outline-none createNotesItem"
                onFocus={() => {
                    setOpen(true)
                    dispatch({ type: 'ADD_ID', value: formatNoteId(Date.now()) });
                }}
                ref={inputDescriptionRef}
                value={state.description}
                onChange={(e) => {
                    dispatch({ type: "ADD_DESCRIPTION", value: e.target.value });
                }}
            />

            <div className={`createNotesItem ${isOpen ? "flex w-full justify-between" : "hidden"}`}>
                <aside className="flex items-center justify-between w-2/3 createNotesItem">
                    {iconList.map((Icon, index) => (
                        <IconHover key={index} className="createNotesItem">
                            <Icon size={iconSize} color={iconColor} strokeWidth={iconStrokeWidth} className="createNotesItem" />
                        </IconHover>
                    ))}
                </aside>
                <div className={`createNotesItem ${isOpen ? "w-1/3 flex justify-end items-center" : "hidden"}`}>
                    <button
                        onClick={(e) => {
                            handleSubmit(e)
                            setOpen(false);
                            inputDescriptionRef.current.blur()
                        }}
                        className="hover:bg-zinc-200 hover:cursor-pointer hover:outline-4 outline-zinc-200 rounded-sm w-1/2 flex justify-center createNotesItem">
                        <p className="text-zinc-600">Cerrar</p>
                    </button>
                </div>
            </div>
        </form>

    )
}