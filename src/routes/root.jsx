import React from 'react'
import { Outlet} from 'react-router-dom'
import Navbutton from '../components/navButton/navbutton-component'
import './root.css'
const Root = () => {

 
    return (
        <>
            <div className='min-h-screen bg-gradient-to-b from-[#232526] to-[#414345] '>
                <div className='max-w-md m-auto flex-col justify-center flex items-center min-h-screen px-4'> 
                    <div id='navBar' className=' w-full space-x-1 bg-[#414345] rounded-2xl flex justify-around transition-transform duration-300 '>
                        <Navbutton text={'Code'} className={'rounded-l-xl'} to={'/code'}/>
                        <Navbutton text={'DeCode'} className={'rounded-r-xl'} to={'/decode'}/>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>

    )
}

export default Root