import { Pin, Palette, BellPlus, UserPlus, Image, Archive, EllipsisVertical, Undo2, Redo2, User, icons, Icon } from "lucide-react"
import { useState, useMemo } from "react"
import { IconHover } from "../IconsEffects"

export default function CreateNotes() {
    const iconSize = '16px'
    const iconColor = '#5a5a5a'
    const iconStrokeWidht = '2.5px'
    const [isOpen, setOpen] = useState(false);
    const iconList = useMemo(() => [
        Palette, BellPlus, UserPlus, Image, Archive, EllipsisVertical, Undo2, Redo2
    ], [])
    return (
        <form className="mx-auto bg-white mt-5 min-h-[40px] w-[600px] rounded-lg shadow-lg flex flex-col p-4 gap-4 ">
            <div className={isOpen ? "w-full flex justify-between" : 'hidden'}>
                <input placeholder="Título" className="placeholder:font-semibold w-full focus-visible:outline-none" />
                <IconHover title={'Fijar nota'}>
                    <Pin color="gray" />
                </IconHover>
            </div>
            <input placeholder="Crear una nota..." className="w-full focus-visible:outline-none" onFocus={() => setOpen(true)} />
            <div className={isOpen ? "flex w-full justify-between" : 'hidden'}>
                <aside className="flex items-center justify-between w-2/3">
                    {iconList.map((Icon, index) => (
                        <IconHover key={index}>
                            <Icon size={iconSize} color={iconColor} strokeWidht={iconStrokeWidht} />
                        </IconHover>
                    ))}
                </aside>
                <div className="w-1/3 flex justify-end items-center " >
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                    }}
                        className="hover:bg-zinc-200 hover:cursor-pointer hover:outline-4 outline-zinc-200 rounded-sm w-1/2 flex justify-center">
                        <p className=" font-semibold text-sm">Cerrar</p>
                    </button>
                </div>
            </div>
        </form>
    )
}