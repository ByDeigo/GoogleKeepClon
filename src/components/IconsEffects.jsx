export function IconHover({ children, title, iconEvent }) {
    return (
        <div className="iconHover hover:outline-10 rounded-full hover:outline-zinc-200" title={title} onClick={iconEvent}>
            {children}
        </div>
    )
}

export function IconSidebarHover({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}