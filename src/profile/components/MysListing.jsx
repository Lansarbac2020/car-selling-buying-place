import { Button } from '@/components/ui/button'
import { db } from './../../../config'
import { CarImages, CarListing } from './../../../config/schema'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Service from '@/shared/Service'
import CarListItem from '@/components/CarListItem'
import { FaTrashAlt } from "react-icons/fa";

function MysListing() {
const{user}=useUser();
const[carList, setCarList]=useState([]);
useEffect(()=>{
   user&&GetUserCarListing()
},[user])
    const GetUserCarListing=async()=>{
        const result=await db.select().from(CarListing).leftJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
        .where(eq(CarListing.createdBy,user?.primaryEmailAddress.emailAddress))
        .orderBy(desc(CarListing.id))
        const resp=Service.FormatResult(result)
        console.log(resp);
        setCarList(resp);
    }
  return (
    <div className='mt-6' >
           <div className=' flex justify-between items-center'>
                <h2 className='font-bold text-3xl md:text-4xl'>My Listing</h2>
                <Link to={'/add-listing'}>
                <Button>+ Add New Listing</Button>
                </Link>
                
     </div>
     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7'>
        {carList.map((item,index)=>(
            <div key={index}>
             <CarListItem car={item}/>
             <div className='flex p-2 bg-gray-50 justify-between rounded-lg gap-3'>
                <Button variant='outline' className="w-full">Edit</Button>
                <Button variant='destructive'> <FaTrashAlt/> </Button>
             </div>
            </div>
        ))}
     </div>
    </div>
 
  )
}

export default MysListing