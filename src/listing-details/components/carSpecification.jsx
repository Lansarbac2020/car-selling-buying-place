import IconField from '@/add-listing/components/IconField'
import carSpecification from '@/shared/carSpecification'
import React from 'react'

function CarProperties({carDetail}) {
  return (
    <div className='p-10 rounded-xl shadow-md mt-6'>
        <h2 className='font-medium text-2xl'>Car Properties</h2>
        {carSpecification.map((item,index)=>(
            <div key={index} className='mt-5 flex items-center gap-2 justify-between'>
                
       <h2 className='flex gap-2'><IconField icon={item?.icon}/> {item.label}</h2>
      <h2 className='text-ellipsis line-clamp-2'>{carDetail[item?.name]}</h2>
       </div>
        ))}
        {/* {carDetail?.length>0&&carDetail.map((carItem,index)=>(
            <div>
                <IconField icon={carSpecification[index].icon}/>
            </div>
        ))} */}
    </div>
  )
}

export default CarProperties