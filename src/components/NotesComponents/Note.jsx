import { Pin } from "lucide-react"

export default function Note({ title, content, isPinned }) {
    if (content.split(' ').length > 58 || title.split(' ').length > 10) {
        content = content.split(' ').slice(0, 58).join(' ') + '...'
        title = title.split(' ').slice(0, 11).join(' ') + '...'
    }
    return (
        <article className=" min-h-[150px] max-h-[460px] bg-white rounded-lg border-zinc-300 border-1 p-4 overflow-hidden transition-all duration-300 hover:cursor-pointer hover:shadow-lg">
            <div className="flex justify-between items-center">
                < label className="font-bold h-1/3">{title}</label >
                {isPinned && <Pin color="black" width={'20px'} />}
            </div>
            <p className="h-2/3">{content}</p>
        </article >
    )
}