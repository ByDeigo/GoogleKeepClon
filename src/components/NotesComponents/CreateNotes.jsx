import { Pin, Palette, BellPlus, UserPlus, Image, Archive, EllipsisVertical, Undo2, Redo2, User, icons, Icon } from "lucide-react"
import { IconHover } from "../IconsEffects"
import { useState, useMemo, useRef, useReducer } from "react"

const initialState = {
    title: '',
    description: '',
    id: 0,
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
            default: {
                return state
            }
        }
    }
    //Usereducer
    const [state, dispacth] = useReducer(reducer, initialState);
    //Iconos
    const iconList = useMemo(() => [
        Palette, BellPlus, UserPlus, Image, Archive, EllipsisVertical, Undo2, Redo2
    ], [])
    const iconSize = '16px'
    const iconColor = '#5a5a5a'
    const iconStrokeWidth = '2.5px'
    //Handle functions
    function handleSubmit(e) {
        e.preventDefault();
        console.log(createNotesRef.current.classList.contains('createNotesItem'))
    }

    return (
        <form className="mx-auto mt-5 w-[600px] rounded-lg shadow-lg flex flex-col p-4 gap-4 createNotesItem" onSubmit={handleSubmit} ref={createNotesRef}>
            <div className={isOpen ? `w-full flex justify-between` : 'hidden'}>
                <input
                    placeholder="Título"
                    className="placeholder:font-semibold w-full focus-visible:outline-none"
                    ref={inputTitleRef}
                    value={state.title}
                    onChange={(e) => {
                        dispacth({ type: 'ADD_TITLE', value: e.target.value })
                    }} />


                <IconHover title={'Fijar nota'}>
                    <Pin color="gray" />
                </IconHover>
            </div>
            {/*Crear una nota*/}
            <input
                placeholder="Crear una nota..."
                className="w-full focus-visible:outline-none"
                onFocus={() => setOpen(true)}
                ref={inputDescriptionRef}
                value={state.description}
                onChange={(e) => {
                    dispacth({ type: 'ADD_DESCRIPTION', value: e.target.value })
                }} />



            <div className={isOpen ? `flex w-full justify-between` : 'hidden'}>
                <aside className="flex items-center justify-between w-2/3">
                    {iconList.map((Icon, index) => (
                        <IconHover key={index}>
                            <Icon size={iconSize} color={iconColor} strokeWidth={iconStrokeWidth} />
                        </IconHover>
                    ))}
                </aside>
                <div className={isOpen ? `w-1/3 flex justify-end items-center` : 'hidden'} >
                    <button onClick={() => setOpen(false)} className="hover:bg-zinc-200 hover:cursor-pointer hover:outline-4 outline-zinc-200 rounded-sm w-1/2 flex justify-center">
                        <p className=" font-semibold text-sm">Cerrar</p>
                    </button>
                </div>
            </div>
        </form>
    )
}