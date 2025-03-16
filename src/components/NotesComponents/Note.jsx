export default function Note({ content }) {
    if (content.split(' ').length > 58) {
        content = content.split(' ').slice(0, 58).join(' ') + '...'
    }
    return (
        <article className=" min-h-[150px] max-h-[460px] bg-white rounded-lg shadow-md p-4 overflow-hidden ">
            <label className="font-bold h-1/3">Título</label>
            <p className="h-2/3">{content}</p>
        </article>
    )
}