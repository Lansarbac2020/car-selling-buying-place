import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {
    const {user, isSignedIn}=useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <img src='/logo.svg' width={150} height={100}/>
        <ul className=' hidden md:flex  gap-16'>
            <li className='font-medium hover:scale-105 cursor-pointer transition-all duration-200 hover:text-slate-700'>Home</li>
            <li className='font-medium hover:scale-105 cursor-pointer transition-all duration-200 hover:text-slate-700'>Search</li>
            <li className='font-medium hover:scale-105 cursor-pointer transition-all duration-200 hover:text-slate-700'>New</li>
            <li className='font-medium hover:scale-105 cursor-pointer transition-all duration-200 hover:text-slate-700'>Preowned</li>
        </ul>
        {isSignedIn ?
        <div className='flex items-center gap-5'>
            <UserButton/>
            <Link to={'/profile'}> <Button>Submit Listing</Button></Link>
        </div>
        :
        <Button>Submit Listing</Button>
       
        }
    </div>
  )
}

export default Header