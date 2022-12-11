import tw from "tailwind-styled-components"
import { NavLink } from 'react-router-dom'
import './navbutton-style.css'
const Navbutton = ({ text, to, className }) => {

    const Navbutton = tw(NavLink)`
    p-3
    relative
    w-full
    h-full 
    bg-[#232526] 
    flex
    justify-center
    items-center
    overflow-hidden
    `

    return (
        <Navbutton className={className+' navb'} to={to}>
            <span id="activeBar" className="absolute rounded-md w-full h-1 bottom-0  bg-[#e0e0e0]"/>
            <span className='text-center w-full text-[#e0e0e0]'>
                {text}
            </span>
        </Navbutton>
    )
}

export default Navbutton