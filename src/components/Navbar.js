import React from 'react'
import Link from "next/link";



function Navbar() {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className='navbar flex justify-center items-center p-1'>
                <h1 className='font-semibold mx-5 my-2 text-xl'><Link href={"/"} className='navbtn flex justify-center items-start'>
                    Home</Link></h1>
                <h1 className='font-semibold mx-5 my-2 text-xl'><Link href={"serve"} className='navbtn flex justify-center items-start'>
                    Service</Link></h1>
                <h1 className='font-semibold mx-5 my-2 text-xl'><Link href={"about"} className='navbtn flex justify-center items-start'>
                    About</Link></h1>
            </div>
        </>
    )
}

export default Navbar
