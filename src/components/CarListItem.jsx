import React from 'react'
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";
import { TbBrandSpeedtest } from "react-icons/tb";




import { Separator } from './ui/separator'


function CarListItem({car}) {
  return (
    <div className=' px-5 rounded-xl border cursor-pointer bg-white hover:shadow-md '>
    <h2 className='absolute m-2 bg-[#008000] px-2 rounded-full text-sm '>New</h2>
    <img 
    src={car?.images?.[0]?.imageUrl || 'default-image-url'} 
    alt={car?.listingTitle || 'Car Image'} 
    width={'100%'} 
    height={250} 
    className='rounded-t-xl h-[180px] object-cover'
/>

        <div className='p-4'>
            <h2 className='font-bold text-black text-lg text-ellipsis line-clamp-1 mb-2 '>{car?.listingTitle}</h2>
            <Separator/>
            <div className='flex items-center justify-center gap-4 mt-5'>
                <div className='flex flex-col items-center'>
                
                <IoSpeedometerOutline  className='text-lg mb-2'/>
                <h2>{car?.mileage}Miles</h2>
                </div>
                <div className='flex flex-col items-center'>
                
                <TbBrandSpeedtest  className='text-lg mb-2'/>
                <h2>{car?.transmission}</h2>
                </div>
                <div className='flex flex-col items-center'>
                <BsFillFuelPumpDieselFill className='text-lg mb-2' />
                <h2>{car?.fuelType}</h2>
                </div>
                
            </div>
            <Separator className='my-2'/>
            <div className='flex items-center justify-between '>
                <h2 className='font-bold text-lg'>${car?.sellingPrice}</h2>
                <h2 className=' flex gap-2 items-center text-sm text-primary cursor-pointer'>
                    
                    View Details <IoMdOpen className='text-sm'/></h2>
            </div>
        </div>
    </div>
  )
}

export default CarListItem