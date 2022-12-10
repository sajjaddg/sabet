import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <div className='min-h-screen bg-gradient-to-b from-[#232526] to-[#414345] '>
                <div className='max-w-md m-auto flex-col justify-center flex items-center min-h-screen px-4'>
                    <div className='p-4 w-full bg-white py-10 rounded-2xl flex justify-around '>
                        <Link to={'/code'} className='p-3 flex justify-center items-center rounded-xl w-32 bg-[#232526] text-[#e0e0e0]'>
                            <span>
                                Code
                            </span>
                        </Link>
                        <button className='p-3 rounded-xl w-32 bg-[#232526] text-[#e0e0e0]'>
                            DeCode
                        </button>
                    </div>
                    <Outlet />

                </div>
            </div>
        </>

    )
}

export default Root