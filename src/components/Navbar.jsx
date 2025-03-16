import { AlignJustify, Icon, RotateCw, Rows2, Settings } from 'lucide-react'
import SearchKeep from '../../public/KeepIcons/SearchKeepIcon'
import { useMemo, useContext } from 'react'
import { IconHover } from './IconsEffects'
import { MenuContext } from '../contexts/MenuContext'

export default function Navbar() {
    const { isAsideOpen, toggleOpen } = useContext(MenuContext);
    const iconSize = '20px'
    const iconColor = 'gray'
    const iconStrokeWidht = '2.25px'
    const iconList = useMemo(() => {
        return [RotateCw, Rows2, Settings];
    }, [])
    return (
        <nav className='flex items-center shadow-sm justify-around w-full gap-5 py-2 border-b-1 sticky top-0 border-gray-200  bg-white z-20 navbar-page'>
            <div className='flex items-center justify-left pl-6 gap-5 w-1/5'>
                <IconHover>
                    <AlignJustify onClick={toggleOpen} size={iconSize} color={iconColor} strokeWidth={iconStrokeWidht} />
                </IconHover>
                <span className='flex items-center gap-2'>
                    <img src='\Images\GoogleKeepIcon.png' className='size-9 object-contain' />
                    <h1 className='text-gray-700 font-semibold text-xl'>Keep</h1>
                </span>
            </div>
            <form className='box-border w-3/5 flex items-center gap-2 bg-[#f1f3f4] p-3 rounded-md'>
                <SearchKeep />
                <input placeholder='Buscar' className='w-[95%] focus-visible:outline-none' />
            </form>
            <div className='flex justify-around w-1/5'>
                {iconList.map((Icon, index) => (
                    <IconHover key={index}>
                        <Icon size={iconSize} color={iconColor} strokeWidth={iconStrokeWidht} />
                    </IconHover>
                ))}
            </div>
        </nav >
    )
}