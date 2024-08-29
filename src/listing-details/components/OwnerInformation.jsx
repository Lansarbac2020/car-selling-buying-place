import { Button } from '@/components/ui/button'
import React from 'react'

function OwnerInformation({carDetail}) {
  return (
    <div className='p-10 mt-7 border rounded-xl shadow-md  md:grid '>
        <h2 className='font-medium text-2xl mb-3'>Owner Details</h2>
        <img src={carDetail?.userImageUrl} className='w-[60px] h-[60px] rounded-full'/>
        <h2 className='mt-2 font-bold text-xl'>{carDetail?.userName}</h2>
        <h2 className='mt-2 text-gray-500 text-xl'>{carDetail?.createdBy}</h2>
        <Button className='mt-6 -translate-x-7'>Message Owner</Button>
    </div>
  )
}

export default OwnerInformation