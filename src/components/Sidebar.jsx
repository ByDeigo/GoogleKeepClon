
import { useMemo, useState, useContext } from "react"
import { Lightbulb, Bell, Pencil, Archive, Trash2 } from "lucide-react"
import { MenuContext } from "../contexts/MenuContext";

export default function Sidebar() {
    const { isAsideOpen, toggleOpen } = useContext(MenuContext);
    const expandAsideClass = 'asideIsHover';
    const iconList = useMemo(() => {
        return [Lightbulb, Bell, Pencil, Archive, Trash2]
    })
    const iconsDescription = ['Notas', 'Recordatorios', 'Etiquetas', 'Archivar', 'Papelera']
    const iconSize = '22px'
    const iconColor = '#5a5a5a'
    const iconStrokeWidht = '2.5px'
    return (
        <aside className={`aside-page bg-white flex flex-col box-border w-[90px] transition-all delay-200 duration-300 group ${isAsideOpen && expandAsideClass}`} >
            <section className="h-4/6 flex flex-col">
                {iconList.map((Icon, index) => (
                    <div key={index} className="flex w-full  py-3.5 rounded-r-full transition-all hover:cursor-pointer ">
                        <span className="pl-4 flex gap-4 ">
                            <Icon size={iconSize} color={iconColor} strokeWidht={iconStrokeWidht} />
                            <a href="#" className={`font-semibold group-hover:opacity-100 opacity-0 transition-opacity delay-200 duration-300 ${isAsideOpen && 'opacity-100'}`}>{iconsDescription[index]}</a>
                        </span>
                    </div>
                ))}
            </section>
            <footer className="h-2/6 flex items-end">
                <a className="text-zinc-500 text-sm group-hover:opacity-100 opacity-0 transition-opacity delay-200 duration-300 p-2">Creado por Diego </a>
            </footer>
        </aside >
    )
}