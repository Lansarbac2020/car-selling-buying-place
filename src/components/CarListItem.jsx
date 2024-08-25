import React from 'react'
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";




import { Separator } from './ui/separator'


function CarListItem({car}) {
  return (
    <div className='rounded-xl border cursor-pointer bg-white hover:shadow-md '>
        <img src={car?.image} width={'%100'} height={250}
        className='rounded-t-xl'/>
        <div className='p-4'>
            <h2 className='font-bold text-black text-lg text-ellipsis line-clamp-1 mb-2 '>{car?.name}</h2>
            <Separator/>
            <div className='flex items-center justify-center gap-4 mt-5'>
                <div className='flex flex-col items-center'>
                
                <IoSpeedometerOutline  className='text-lg mb-2'/>
                <h2>{car.miles}Miles</h2>
                </div>
                <div className='flex flex-col items-center'>
                <BsFillFuelPumpDieselFill className='text-lg mb-2' />
                <h2>{car.fuelType}</h2>
                </div>
                <div className='flex flex-col items-center'>
                <GiGearStickPattern  className='text-lg mb-2'/>
                <h2>{car.gearType}</h2>
                </div>
            </div>
            <Separator className='my-2'/>
            <div className='flex items-center justify-between '>
                <h2 className='font-bold text-lg'>${car.price}</h2>
                <h2 className=' flex gap-2 items-center text-sm text-primary cursor-pointer'>
                    
                    View Details <IoMdOpen className='text-sm'/></h2>
            </div>
        </div>
    </div>
  )
}

export default CarListItem