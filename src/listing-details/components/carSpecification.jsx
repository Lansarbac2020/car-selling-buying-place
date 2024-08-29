import IconField from '@/add-listing/components/IconField'
import carSpecification from '@/shared/carSpecification'
import React from 'react'

function CarProperties({ carDetail }) {
  if (!carDetail) {
    return <div>Car details are not available.</div>; // Fallback if carDetail is missing
  }

  return (
    <div className='p-10 rounded-xl shadow-md mt-6'>
      <h2 className='font-medium text-2xl'>Car Properties</h2>
      {carDetail? carSpecification.map((item, index) => (
        <div key={index} className='mt-5 flex items-center gap-2 justify-between'>
          <h2 className='flex gap-2'>
            <IconField icon={item?.icon} /> {item.label}
          </h2>
          <h2 className='text-ellipsis line-clamp-2'>
            {carDetail?.[item?.name] || 'N/A'}
          </h2>
        </div>
      ))
    :
    <div className='w-full h-[500px] bg-slate-200 animate-pulse rounded-xl'>

    </div>
    }
    </div>
  );
}

export default CarProperties;
