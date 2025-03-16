export function IconHover({ children, title }) {
    return (
        <div className="iconHover hover:outline-10 rounded-full hover:outline-zinc-200" title={title}>
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