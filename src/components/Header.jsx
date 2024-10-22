import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {
    const {user, isSignedIn}=useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <img src='/logo.svg' width={150} height={100}/>
        <ul className=' hidden md:flex  gap-16'>
          <Link to={'/'}> <li className='font-medium hover:scale-105 cursor-pointer transition-all duration-200 hover:text-slate-700'>Home</li></Link>
          <Link to={'/#'}> <li className='font-medium hover:scale-105 cursor-pointer transition-all duration-200 hover:text-slate-700'>Search</li></Link>
           <Link to={'/'}><li className='font-medium hover:scale-105 cursor-pointer transition-all duration-200 hover:text-slate-700'>New</li></Link>
           <li className='font-medium hover:scale-105 cursor-pointer transition-all duration-200 hover:text-slate-700'>Preowned</li>
        </ul>
        {isSignedIn ?
        <div className='flex items-center gap-5'>
            <UserButton/>
            <Link to={'/profile'}> <Button>Submit Listing</Button></Link>
        </div>
        :
       <Button><SignInButton/></Button>
        
       
        }
    </div>
  )
}

export default Header