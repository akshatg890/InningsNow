import React from 'react'

function Header() {
    return (
        <header className='w-full h-max box-border top-0 left-0 right-0 py-5 shadow-md shadow-green-800 bg-green-500'>
            <nav 
                className='h-full w-full flex text-white font-semibold items-center justify-between px-3 border-2 border-black'
            >
                <div className='h-full w-[20%]'>Logo</div>
                <div className='h-full text-center w-[30%] text-3xl text-white'>InningsNow</div>
                <ul 
                    className='flex items-center justify-around h-full w-1/2 cursor-pointer '
                >
                    <li className='hover:bg-white hover:text-green-500 py-1 px-3 hover:rounded-2xl '>Home</li>
                    <li className='hover:bg-white hover:text-green-500 py-1 px-3 hover:rounded-2xl '>About</li>
                    <li className='hover:bg-white hover:text-green-500 py-1 px-3 hover:rounded-2xl '>Contact</li>
                    <li className='hover:bg-white hover:text-green-500 py-1 px-3 hover:rounded-2xl '>Profile</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header