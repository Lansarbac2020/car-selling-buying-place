import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { RiGasStationFill } from "react-icons/ri";






function DetailsHeader({carDetail}) {
  return (
    <div>
       {carDetail?.listingTitle? <div>
        <h1 className='text-3xl font-bold'>{carDetail?.listingTitle}</h1>
  <p className='text-sm text-gray-500'>{carDetail?.tagline}</p>
  <div className='flex mt-2 gap-3'>
  <div className='flex gap-2 items-center bg-blue-50 rounded-full p-1 px-3'>
  <FaCalendarAlt className='h-5 w-5 text-primary' />
  <h2 className='text-primary text-sm'>{carDetail?.year}</h2>
  </div>

  <div className='flex gap-2 items-center bg-blue-50 rounded-full p-1 px-3'>
  <IoSpeedometerOutline className='h-5 w-5 text-primary' />
  <h2 className='text-primary text-sm'>{carDetail?.mileage} miles</h2>
  </div>

  <div className='flex gap-2 items-center bg-blue-50 rounded-full p-1 px-3'>
  <GiGearStickPattern className='h-5 w-5 text-primary' />
  <h2 className='text-primary text-sm'>{carDetail?.transmission}</h2>
  </div>
  <div className='flex gap-2 items-center bg-blue-50 rounded-full p-1 px-3'>
  <RiGasStationFill  className='h-5 w-5 text-primary' />
  <h2 className='text-primary text-sm'>{carDetail?.fuelType}</h2>
  </div>
</div>
</div>
: <div className='w-full rounded-xl h-[100px] bg-gray-200 animate-pulse'>

</div>
}
    </div>
  )
}

export default DetailsHeader