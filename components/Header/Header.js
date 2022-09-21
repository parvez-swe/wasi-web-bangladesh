import React from 'react'
import classes from './Header.module.css';
export const Header = () => {
  return (
    <div className='bg-black text-white flex flex-row justify-between items-center '>
        
        <div className='flex flex-row items-center justify-between'>

        <div className='logo ml-4'>
            <h1 className='text-xl font-bold'>Wasi Web Bangladesh</h1>
        </div>

        <ul className=" flex flex-row mr-5">
            <li className="py-2 px-3 font-medium hover:bg-red-400 hover:">Home</li>
            <li className="py-2 px-3 font-medium hover:bg-red-400 hover:">About Us</li>
            <li className="py-2 px-3 font-medium hover:bg-red-400 hover:">Contact</li>
            <li className="py-2 px-3 font-medium hover:bg-red-400 hover:">Blogs</li>
            
        </ul>
        </div>


        <div className='mr-3'>
            cart box
        </div>
    </div>
  )
}
