import { IconHover } from "../IconsEffects";

export default function AppButton({ children, iconEvent }) {
    return (
        <IconHover iconEvent={iconEvent}>
            {children}
        </IconHover>
    )
}