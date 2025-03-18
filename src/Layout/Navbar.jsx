import { AlignJustify, Search, RotateCw, Rows2, Settings, Grid2X2 } from 'lucide-react'
import { useContext, useState, useEffect } from 'react'
import { IconHover } from '../components/IconsEffects'
import { MenuContext } from '../contexts/MenuContext'
import { DisplayContext } from '../contexts/DisplayContext'
import AppButton from '../components/Buttons/AppButton.jsx'

export default function Navbar() {
    const { toggleOpen } = useContext(MenuContext);
    const { isDisplayChanged, toggleDisplay } = useContext(DisplayContext)
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setViewportWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const iconSize = '20px'
    const iconColor = 'gray'
    const iconStrokeWidth = '2.25px'
    return (

        <nav className='flex items-center shadow-sm justify-between md:justify-around w-full gap-5 py-2 border-b-1 sticky top-0 border-gray-200  bg-white z-40 navbar-page'>
            <div className='flex items-center justify-left pl-6 gap-5 w-1/2 md:1/5'>
                <IconHover>
                    <AlignJustify onClick={toggleOpen} size={iconSize} color={iconColor} strokeWidth={iconStrokeWidth} />
                </IconHover>
                <span className='flex items-center gap-2'>
                    <img src='\Images\GoogleKeepIcon.png' className='size-9 object-contain hidden sm:block' />
                    <h1 className='text-gray-700 font-semibold text-xl'>Keep</h1>
                </span>
            </div>
            <form className='box-border w-3/5 hidden md:flex items-center gap-2 bg-[#f1f3f4] p-3 rounded-md'>
                <Search className='hidden md:block' color={iconColor} />
                <input placeholder='Buscar' className='w-[95%] focus-visible:outline-none' />
            </form>
            <div className='flex justify-around items-center w-1/2 md:1/5 gap-4'>
                <AppButton>
                    <RotateCw size={iconSize} color={iconColor} strokeWidth={iconStrokeWidth} />
                </AppButton>
                <AppButton iconEvent={toggleDisplay}>
                    {
                        isDisplayChanged ? (
                            <Grid2X2 size={iconSize} color={iconColor} strokeWidth={iconStrokeWidth} />
                        ) : (
                            <Rows2 size={iconSize} color={iconColor} strokeWidth={iconStrokeWidth} />
                        )
                    }
                </AppButton>
                <AppButton>
                    <Settings size={iconSize} color={iconColor} strokeWidth={iconStrokeWidth} />
                </AppButton>
            </div>
        </nav >
    )
}