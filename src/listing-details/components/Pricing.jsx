import { Button } from '@/components/ui/button'
import React from 'react'
import { MdLocalOffer } from "react-icons/md";

function Pricing({carDetail}) {
  return (
    <div className='p-10 rounded-xl shadow-md border'>
        <h2>Our Price</h2>
        <h2 className='font-bold text-2xl md:text-4xl'>${carDetail?.sellingPrice}</h2>

        <Button className="w-full mt-7" size="lg"><MdLocalOffer className='text-lg mr-2 md:mr-1' /> Make an offer</Button>
    </div>
  )
}

export default Pricing