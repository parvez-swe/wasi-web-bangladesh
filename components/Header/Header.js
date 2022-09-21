import React from 'react'
import classes from './Header.module.css';
export const Header = () => {
  return (
    <div className='bg-black text-white grid grid-cols-1 items-center content-center '>
        
        <div className='grid'>

        <div className='logo grid grid-cols-1 ml-4 mb-3'>
            <h1 className='text-xl font-bold mr-6 flex items-center justify-center'>WW Bangladesh</h1>
            
            <div className=' absolute top-0 right-1 '>
                cart box
            </div>
        </div>

        </div>

        <div className='flex items-center justify-center search-bar text-black mb-4'>
          <input className='  rounded px-1 focus:outline-none' type="text" placeholder=' search...'/>
        </div>

        <ul className="grid grid-cols-1 ">
            <li className="py-2 px-3 font-medium hover:bg-red-400 flex justify-center  items-center  ">Home</li>
            <li className="py-2 px-3 font-medium hover:bg-red-400 flex justify-center  items-center">About Us</li>
            <li className="py-2 px-3 font-medium hover:bg-red-400 flex justify-center  items-center">Contact</li>
            <li className="py-2 px-3 font-medium hover:bg-red-400 flex justify-center  items-center">Blogs</li>
            
        </ul>

    </div>
  )
}
